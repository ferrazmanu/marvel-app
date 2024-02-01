import { FC } from 'react';
import { Input } from '../Input';
import * as S from './styles';

const SearchBar: FC = () => {
    return (
        <S.Wrapper>
            <Input />
        </S.Wrapper>
    );
};

export default SearchBar;
