import { FC } from 'react';
import { Input } from '../Input';
import * as S from './styles';

interface Props {
    searchFunc: (e: string) => void;
}

const SearchBar: FC<Props> = ({ searchFunc }) => {
    return (
        <S.Wrapper>
            <Input searchFunc={searchFunc} />
        </S.Wrapper>
    );
};

export default SearchBar;
