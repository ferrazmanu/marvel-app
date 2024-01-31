import { setUserAuth } from '../redux/actions';
import { getCookie } from './cookies';
import { Dispatch } from 'react';
import { UnknownAction } from 'redux';

export const AuthenticateUser = (dispatch: Dispatch<UnknownAction>) => {
    const publicKey = getCookie('publicKey');
    const privateKey = getCookie('privateKey');

    if (publicKey && privateKey) {
        dispatch(setUserAuth(true));
    } else {
        window.location.href = '/keys';
    }
};
