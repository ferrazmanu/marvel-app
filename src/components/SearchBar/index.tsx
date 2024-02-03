import { FC, useEffect, useState } from 'react';
import { Input } from '../Input';
import * as S from './styles';
import { Select } from '../Select';
import { FieldValues, useForm } from 'react-hook-form';
import { FiltersProps, OptionProps } from '../../types/types';
import http from '../../service/config';

interface Props {
    searchFunc: (e: FiltersProps) => void;
    filtertype: OptionProps[];
}

const SearchBar: FC<Props> = ({ searchFunc, filtertype }) => {
    const hookForm = useForm<FieldValues>();
    const { register, handleSubmit } = hookForm;
    const selectedFilterType = hookForm.watch('filterType');

    const [filteredOptions, setFilteredOption] = useState([]);
    const [loading, setLoading] = useState(false);

    const onSubmit = (data: FieldValues) => {
        try {
            searchFunc({
                filtersIds: [`${data.filterId}`],
                search: data.search,
                selectedFilterType: selectedFilterType || null,
            });
        } catch (error) {
            console.error(error);
        }
    };

    const fetchOptions = async (value: string) => {
        const selectedKey: string =
            filtertype.find((item) => item.value === selectedFilterType)
                ?.parameter || 'nameStartsWith';

        try {
            setLoading(true);

            const response = await http.get(selectedFilterType, {
                params: {
                    limit: 10,
                    [selectedKey]: value || null,
                },
            });
            if (response.status !== 200) {
                throw new Error('Network response was not ok');
            }

            const updatedResults = response.data.data.results.map(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (result: any) => ({
                    ...result,
                    value: result.id,
                    selected: result.selected || false,
                    name:
                        result?.name ||
                        result?.title ||
                        result?.originalIssue.name,
                })
            );

            setFilteredOption(updatedResults);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    const defaultSelected =
        filtertype.find((item) => item.default)?.value !== selectedFilterType;

    useEffect(() => {
        if (selectedFilterType) {
            fetchOptions('');
        }
    }, [selectedFilterType]);

    return (
        <S.Wrapper>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Select
                    hookForm={hookForm}
                    options={filtertype}
                    name="filterType"
                    placeholder="Selecione o Tipo"
                />

                {defaultSelected && (
                    <Select
                        hookForm={hookForm}
                        options={filteredOptions}
                        name="filterId"
                        disabled={!selectedFilterType || loading}
                        loading={loading}
                        fetchOptions={(e) => fetchOptions(e)}
                    />
                )}

                <Input
                    submitButton
                    {...register('search')}
                    placeholder="Pesquisar"
                />
            </form>
        </S.Wrapper>
    );
};

export default SearchBar;
