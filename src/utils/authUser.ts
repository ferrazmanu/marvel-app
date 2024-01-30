import { getCookie } from './cookies';

export const AuthenticateUser = () => {
    const publicKey = getCookie('publicKey');
    const privateKey = getCookie('privateKey');

    if (!publicKey && !privateKey) window.location.href = '/login';
    return true;
};
