import * as S from './styles';
import {
    ChangeEvent,
    FC,
    forwardRef,
    InputHTMLAttributes,
    useState,
} from 'react';
import SearchIcon from '@mui/icons-material/Search';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    searchFunc?: (e: string) => void;
}

export const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
    (props, ref) => {
        const [valorInput, setValorInput] = useState('');

        const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
            setValorInput(event.target.value);
        };

        return (
            <S.Wrapper className="input-wrapper">
                {props.searchFunc && (
                    <button
                        onClick={() =>
                            props.searchFunc && props.searchFunc(valorInput)
                        }
                    >
                        <SearchIcon color="inherit" />
                    </button>
                )}
                <input {...props} ref={ref} onChange={handleChange} />
            </S.Wrapper>
        );
    }
);

Input.displayName = 'Input';
