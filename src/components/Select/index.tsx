import { FC, useEffect, useRef, useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SearchIcon from '@mui/icons-material/Search';

import { OptionProps } from '../../types/types';

import { FieldValues } from 'react-hook-form';

import * as S from './styles';
import Loading from '../Loading';

interface SelectProps {
    options: OptionProps[];
    hookForm: FieldValues;
    disabled?: boolean;
    required?: boolean;
    name: string;
    fetchOptions?: (e: string) => void;
    placeholder?: string;
    loading?: boolean;
}

export const Select: FC<SelectProps> = ({
    options,
    hookForm,
    disabled,
    required = false,
    name,
    fetchOptions,
    placeholder,
    loading,
}) => {
    const [openList, setOpenList] = useState(false);
    const [inputSearch, setInputSearch] = useState('');

    const node = useRef<HTMLDivElement | null>();
    const nodeInput = useRef<HTMLInputElement>();

    const itemSelectedValue = hookForm.watch(name);
    const itemSelected = options.find((e) => e.value === itemSelectedValue);

    const itemSelectedLabel =
        itemSelected?.title ||
        itemSelected?.name ||
        itemSelected?.fullName ||
        placeholder ||
        'Selecione';

    const toggleList = () => {
        if (!disabled) setOpenList((e) => !e);
    };

    const onChangeInput = (e: { target: { value: string } }) =>
        setInputSearch(e.target.value);

    const handleClickOutside = (e: MouseEvent) => {
        if (!node?.current?.contains(e.target as Node)) setOpenList(false);
    };

    const selectedItem = (value: string) => {
        hookForm.setValue(name, value);
        setOpenList(false);
    };

    useEffect(() => {
        hookForm.register(name, { required: required });
    }, [hookForm, name, required]);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        if (nodeInput.current) nodeInput.current.focus();
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <S.Wrapper
            disabled={disabled}
            open={openList}
            loading={loading}
            ref={node as React.RefObject<HTMLDivElement>}
        >
            <div className="header" aria-hidden="true" onClick={toggleList}>
                {loading ? (
                    <Loading size="15px" />
                ) : (
                    <>
                        <div className="header-title">{itemSelectedLabel}</div>
                        {openList ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </>
                )}
            </div>
            {openList ? (
                <S.List>
                    {fetchOptions && (
                        <S.Item className="select-search">
                            <input
                                value={inputSearch}
                                ref={
                                    nodeInput as React.RefObject<HTMLInputElement>
                                }
                                onChange={(e) => onChangeInput(e)}
                            />
                            <button
                                type="button"
                                className="select-search"
                                onClick={() => fetchOptions(inputSearch)}
                            >
                                <SearchIcon color="inherit" />
                            </button>
                        </S.Item>
                    )}

                    {options.map((item) => (
                        <S.Item
                            key={item.id}
                            value={item.value}
                            selected={item.selected}
                            onClick={() => selectedItem(item.value)}
                        >
                            {item.name || item.title || item.fullName}
                        </S.Item>
                    ))}
                </S.List>
            ) : null}
        </S.Wrapper>
    );
};

Select.displayName = 'Select';
