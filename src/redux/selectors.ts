import { RootState } from '../types/types';

export const selectAuth = (state: RootState) => state.auth;
export const selectCharacters = (state: RootState) => state.characters;
export const selectComics = (state: RootState) => state.comics;
export const selectCreators = (state: RootState) => state.creators;
export const selectTheme = (state: RootState) => state.theme;
export const selectState = (state: RootState) => state;
