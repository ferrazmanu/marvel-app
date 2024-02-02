import { useSelector } from 'react-redux';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { selectTheme } from '../../redux/selectors';

const theme: DefaultTheme = {
    fontSizes: {
        big_80: 'clamp(2.37rem, 80px, 5rem)',
        big_64: 'clamp(1.875rem, 64px, 4rem)',
        big_60: 'clamp(1.75rem, 60px, 3.75rem)',
        big_48: 'clamp(1.375rem, 48px, 3rem)',
        big_42: 'clamp(1.375rem, 42px, 2.62rem)',
        medium_36: 'clamp(1.313rem, 36px, 2.25rem)',
        medium_32: 'clamp(1.25rem, 32px, 2rem)',
        medium_30: 'clamp(1.375rem, 30px, 1.875rem)',
        medium_24: 'clamp(1.063rem, 24px, 1.5rem)',
        small_18: 'clamp(0.813rem, 18px, 1.125rem)',
        small_12: 'clamp(0.625rem, 12px, 0.75rem)',
    },
    spacing: {
        _30: 'clamp(1.375rem, 1.56vw, 1.875rem)',
        _60: 'clamp(1.875rem, 3.13vw, 3.75rem)',
    },
    fonts: {
        primary: 'Marvel',
        secondary: 'Roboto',
    },
    colors: {
        primary: '#C4A8FF',
        secondary: '#664EAE',
        tertiary: '#1A0554',
        quarternary: '#090524',
        quinquenary: '#0C0B13',
    },
    light: {
        colors: {
            white: ' #0a0a0a',
            black: '#ebebeb',
            background: '#C4A8FF',
            gradient:
                'linear-gradient( 0deg, rgba(255, 255, 255, 0) 0%, rgb(97 97 97) 100% )',
            fullgradient: 'rgba(159, 159, 159, 0.44)',
            button: 'transparent',
            loading: '#0a0a0a',
        },
    },
    dark: {
        colors: {
            white: '#ebebeb',
            black: '#0a0a0a',
            background:
                'linear-gradient(0deg,rgba(9, 5, 36, 1) 0%,rgba(12, 11, 19, 1) 100%)',
            gradient:
                'linear-gradient( 0deg, rgba(255, 255, 255, 0) 0%, rgba(9, 5, 36, 1) 100% )',
            fullgradient: 'rgba(9, 5, 36, 0.8)',
            button: '#1A0554',
            loading: '#ebebeb',
        },
    },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Theme = ({ children }: any) => {
    const chosenTheme = useSelector(selectTheme);

    let currentTheme;
    if (chosenTheme === 'light') {
        currentTheme = {
            ...theme,
            colors: { ...theme.colors, ...theme.light.colors },
        };
    } else {
        currentTheme = {
            ...theme,
            colors: { ...theme.colors, ...theme.dark.colors },
        };
    }

    return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};

export default Theme;
