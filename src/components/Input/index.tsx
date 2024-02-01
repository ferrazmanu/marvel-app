import * as S from './styles';
import { FC, InputHTMLAttributes } from 'react';

const Input: FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {
    console.log(props);
    return (
        <S.Wrapper>
            <input {...props} />
        </S.Wrapper>
    );
};

export default Input;
