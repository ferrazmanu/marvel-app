import { useEffect, useState } from 'react';
import { getCookie, setCookie } from '../utils/cookies';

const themePreference = getCookie('themePreference');

export const useThemeDetector = () => {
    const getCurrentTheme = () =>
        themePreference === 'dark' ||
        window.matchMedia('(prefers-color-scheme: dark)').matches;

    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());

    const mqListener = (e: {
        matches: boolean | ((prevState: boolean) => boolean);
    }) => {
        setIsDarkTheme(e.matches);
    };

    useEffect(() => {
        const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
        darkThemeMq.addEventListener('change', mqListener);
        return () => darkThemeMq.removeEventListener('change', mqListener);
    }, []);

    if (isDarkTheme) {
        setCookie('themePreference', 'dark');
        return 'dark';
    } else {
        setCookie('themePreference', 'light');
        return 'light';
    }
};
