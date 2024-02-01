import { useDispatch, useSelector } from 'react-redux';

import * as S from './styles';
import { setTheme } from '../../redux/actions';
import { selectTheme } from '../../redux/selectors';
import { useThemeDetector } from '../../hooks/useThemeDetector';

export const ThemeButton = () => {
    const theme = useSelector(selectTheme);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const themePreference = useThemeDetector();

    const dispatch = useDispatch();

    const handleClick = () => {
        if (theme === 'dark') {
            dispatch(setTheme('light'));
        } else {
            dispatch(setTheme('dark'));
        }
    };

    return (
        <S.ButtonWrapper className="translation">
            <div className="button">
                <input
                    type="checkbox"
                    className="checkbox"
                    onChange={() => handleClick()}
                    defaultChecked={theme !== 'dark'}
                />

                <div className="knobs"></div>

                <div className="layer"></div>
            </div>
        </S.ButtonWrapper>
    );
};
