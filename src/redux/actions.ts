import {
    SET_CHARACTERS,
    SET_COMICS,
    SET_CREATORS,
    SET_KEYS,
} from './constants';
import { CharactersProps, ComicsProps, CreatorsProps } from '../types/types';

export const setKeys = (publicKey: string, privateKey: string) => ({
    type: SET_KEYS,
    payload: { publicKey, privateKey },
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
