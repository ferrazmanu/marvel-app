import {
    SET_AUTH,
    SET_CHARACTERS,
    SET_COMICS,
    SET_CREATORS,
} from './constants';
import { RootState } from '../types/types';

const initialState: RootState = {
    auth: false,
    characters: {
        count: 20,
        limit: 20,
        offset: 0,
        results: [],
        total: 0,
    },
    comics: {
        count: 20,
        limit: 20,
        offset: 0,
        results: [],
        total: 0,
    },
    creators: {
        count: 20,
        limit: 20,
        offset: 0,
        results: [],
        total: 0,
    },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const reducer = (state = initialState, action: any): RootState => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                auth: action.payload.auth,
            };
        case SET_CHARACTERS:
            return {
                ...state,
                characters: action.payload.characters,
            };
        case SET_COMICS:
            return {
                ...state,
                comics: action.payload.comics,
            };
        case SET_CREATORS:
            return {
                ...state,
                creators: action.payload.creators,
            };
        default:
            return state;
    }
};
