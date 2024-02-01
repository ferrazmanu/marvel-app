import { FC } from 'react';
import SearchBar from '../SearchBar';
import * as S from './styles';

interface Props {
    title: string;
}

const PageTitle: FC<Props> = ({ title }) => {
    return (
        <S.Wrapper>
            <h2>{title}</h2>
            <SearchBar />
        </S.Wrapper>
    );
};

export default PageTitle;
