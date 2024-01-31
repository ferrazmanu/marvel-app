import { Loading } from '../Loading';
import * as S from './styles';

interface Props {
    loading?: boolean;
    text?: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
}

export const Button = ({ loading, text, type, onClick }: Props) => {
    console.log(loading);

    return (
        <S.Button type={type} onClick={onClick}>
            {loading ? <Loading size="24px" /> : text}
        </S.Button>
    );
};
