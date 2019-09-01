import axios from 'axios';

import { AuthenticationError } from '../utils/errors';

import { CreateUser, LoginUser } from '../types/auth.types';
import { UserResponse } from '../types/api.types';

export const routes = {
    LOGIN: '/users/login',
    LOGOUT: '/users/logout',
    LOGOUT_ALL: '/users/logoutAll',
    UPLOAD_AVATAR: '/users/me/avatar',
    CREATE_ACCOUNT: '/users'
};

const login = async (user: LoginUser) => {
    try {
        const response = await axios.post<UserResponse>(routes.LOGIN, user);
        return response.data;
    } catch (error) {
        throw new AuthenticationError(error);
    }
};

const logout = async () => {
    try {
        const response = await axios.post(routes.LOGOUT);
        return response.data;
    } catch (error) {
        throw new AuthenticationError(error);
    }
};

const createAccount = async (user: CreateUser) => {
    try {
        console.log('creating:', user);
        const response = await axios.post<UserResponse>(routes.CREATE_ACCOUNT, user);
        return response.data;
    } catch (error) {
        throw new AuthenticationError(error);
    }
};

export default {
    login,
    logout,
    createAccount
};