import { RootState } from '../types/types';

export const selectKeys = (state: RootState) => state.keys;
export const selectCharacters = (state: RootState) => state.characters;
export const selectComics = (state: RootState) => state.comics;
export const selectCreators = (state: RootState) => state.creators;
export const selectState = (state: RootState) => state;
