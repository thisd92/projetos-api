import axios from 'axios';
import { BASE_URL_SINTEGRA, BASE_URL_WS } from '../utils/request';

export const apiSintegra = axios.create({
    method: 'get',
    baseURL: BASE_URL_SINTEGRA,
});

export const apiWS = axios.create({
    method: 'get',
    baseURL: BASE_URL_WS,
})