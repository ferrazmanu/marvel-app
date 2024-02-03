import { FC } from 'react';
import SearchBar from '../SearchBar';
import * as S from './styles';
import { FiltersProps, OptionProps } from '../../types/types';

interface Props {
    title?: string;
    searchFunc?: (e: FiltersProps) => void;
    filtertype: OptionProps[];
}

const PageTitle: FC<Props> = ({ title, searchFunc, filtertype }) => {
    return (
        <S.Wrapper>
            <h2>{title}</h2>

            {searchFunc && (
                <SearchBar filtertype={filtertype} searchFunc={searchFunc} />
            )}
        </S.Wrapper>
    );
};

export default PageTitle;
