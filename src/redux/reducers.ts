import { SET_KEYS } from './actions';
import { RootState } from './types';

const initialState: RootState = {
    publicKey: '',
    privateKey: '',
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const keysReducer = (state = initialState, action: any): RootState => {
    switch (action.type) {
        case SET_KEYS:
            return {
                ...state,
                publicKey: action.payload.publicKey,
                privateKey: action.payload.privateKey,
            };
        default:
            return state;
    }
};
