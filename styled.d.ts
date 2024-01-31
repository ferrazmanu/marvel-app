import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            white: string;
            black: string;
            primary: string;
            secondary: string;
            tertiary: string;
            quarternary: string;
            quinquenary: string;
        };
        fontSizes: {
            big_80: string;
            big_64: string;
            big_60: string;
            big_48: string;
            big_42: string;
            medium_36: string;
            medium_30: string;
            medium_32: string;
            medium_24: string;
            small_18: string;
            small_12: string;
        };
        spacing: {
            _30: string;
            _60: string;
        };
    }
}
