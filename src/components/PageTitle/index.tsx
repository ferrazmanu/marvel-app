import { FC } from 'react';
import SearchBar from '../SearchBar';
import * as S from './styles';

interface Props {
    title?: string;
    searchFunc?: (e: string) => void;
}

const PageTitle: FC<Props> = ({ title, searchFunc }) => {
    return (
        <S.Wrapper>
            <h2>{title}</h2>
            {searchFunc && <SearchBar searchFunc={searchFunc} />}
        </S.Wrapper>
    );
};

export default PageTitle;
