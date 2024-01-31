import { Loading } from '../Loading';
import * as S from './styles';

interface Props {
    loading?: boolean;
    text?: string;
    type?: 'button' | 'submit' | 'reset';
    onClick?: () => void;
    maxWidth?: string;
}

export const Button = ({ loading, text, type, onClick, maxWidth }: Props) => {
    console.log(loading);

    return (
        <S.Button
            type={type}
            onClick={onClick}
            disabled={loading}
            maxWidth={maxWidth}
        >
            {loading ? <Loading size="24px" /> : text}
        </S.Button>
    );
};
