import * as S from './styles';
import { FC, forwardRef, InputHTMLAttributes } from 'react';
import SearchIcon from '@mui/icons-material/Search';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    submitButton?: boolean;
    disabled?: boolean;
}

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
    (props, ref) => {
        return (
            <S.Wrapper className="input-wrapper" disabled={props.disabled}>
                <input {...props} ref={ref} />

                {props.submitButton && (
                    <button type="submit">
                        <SearchIcon color="inherit" />
                    </button>
                )}
            </S.Wrapper>
        );
    }
);

Input.displayName = 'Input';
