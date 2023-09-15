import { APP_SETTING } from '@/constant/app-settings';
import axios from 'axios';
import { ResponseError } from '@/type/api';
import { Auth } from '@/api/endpoints/auth.api';
import { Dashboard } from '@/api/endpoints/dashboard.api';
import { Product } from './endpoints/product.api';
import { Category } from './endpoints/category.api';

////////////////////////////////////////
////////////////////////////////////////
/////         Api List
////////////////////////////////////////
////////////////////////////////////////

export const api = {
    Auth,
    Dashboard,
    Product,
    Category
};

////////////////////////////////////////
////////////////////////////////////////
/////         Axios Settings
////////////////////////////////////////
////////////////////////////////////////

export const getToken = () => localStorage.getItem(APP_SETTING.localStorageToken);

export const customAxios = axios.create({
    baseURL: process.env.API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

customAxios.interceptors.request.use(async (req) => {
    const originalRequest = req;
    const token = getToken();

    if (token && originalRequest.headers) {
        originalRequest.headers['Authorization'] = 'Bearer ' + token;
        return Promise.resolve(originalRequest);
    }

    return req;
});

customAxios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        const response: ResponseError = error?.response?.data;
        return Promise.reject(response);
    }
);
