import axios from 'axios';
import { getCookie } from '../utils/cookies';
import md5 from 'md5';

const publicKey = getCookie('publicKey');
const privateKey = getCookie('privateKey');
const BASE_URL = 'http://gateway.marvel.com/v1/public/';
const hash = md5(`1${privateKey}${publicKey}`);

const http = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    params: {
        ts: 1,
        apikey: publicKey,
        hash: hash,
    },
});

export default http;
