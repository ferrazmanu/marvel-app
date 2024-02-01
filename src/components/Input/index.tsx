import * as S from './styles';
import { FC, forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
    (props, ref) => {
        return (
            <S.Wrapper>
                <input {...props} ref={ref} />
            </S.Wrapper>
        );
    }
);

Input.displayName = 'Input';
