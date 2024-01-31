import { getCookie } from '../utils/cookies';
import {
    SET_CHARACTERS,
    SET_COMICS,
    SET_CREATORS,
    SET_KEYS,
} from './constants';
import { RootState } from '../types/types';

const publicKey = getCookie('publicKey');
const privateKey = getCookie('privateKey');

const initialState: RootState = {
    keys: {
        publicKey: publicKey || '',
        privateKey: privateKey || '',
    },
    characters: [],
    comics: [],
    creators: [],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const reducer = (state = initialState, action: any): RootState => {
    switch (action.type) {
        case SET_KEYS:
            return {
                ...state,
                keys: {
                    publicKey: action.payload.publicKey,
                    privateKey: action.payload.privateKey,
                },
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
