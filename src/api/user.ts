import axios from 'axios';

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
        return { token: response.data.token };
    } catch (error) {
        throw new Error(error);
    }
};

export default {
    login
};