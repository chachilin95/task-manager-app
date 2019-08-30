import axios from 'axios';

import { AuthenticationError } from '../utils/errors';

import { User } from '../types/auth.types';
import { UserResponse } from '../types/api.types';

export const routes = {
    LOGIN: '/users/login',
    LOGOUT: '/users/logout',
    LOGOUT_ALL: '/users/logoutAll',
    UPLOAD_AVATAR: '/users/me/avatar',
    CREATE_ACCOUNT: '/users'
};

const login = async (user: User) => {
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

export default {
    login,
    logout
};