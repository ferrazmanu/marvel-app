import {
    SET_AUTH,
    SET_CHARACTERS,
    SET_COMICS,
    SET_CREATORS,
    SET_THEME,
} from './constants';
import { CharactersProps, ComicsProps, CreatorsProps } from '../types/types';

export const setUserAuth = (auth: boolean) => ({
    type: SET_AUTH,
    payload: { auth },
});

export const setCharacters = (characters: CharactersProps) => ({
    type: SET_CHARACTERS,
    payload: { characters },
});

export const setComics = (comics: ComicsProps[]) => ({
    type: SET_COMICS,
    payload: { comics },
});

export const setCreators = (creators: CreatorsProps[]) => ({
    type: SET_CREATORS,
    payload: { creators },
});

export const setTheme = (theme: string) => ({
    type: SET_THEME,
    payload: { theme },
});
