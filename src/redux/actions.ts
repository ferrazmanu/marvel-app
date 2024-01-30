export const SET_KEYS = 'SET_KEYS';

export const setKeys = (publicKey: string, privateKey: string) => ({
    type: SET_KEYS,
    payload: { publicKey, privateKey },
});
