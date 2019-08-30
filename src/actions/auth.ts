import { Action, User } from '../types/auth.types';
import UserAPI from '../api/user';

///////////// LOGIN /////////////

export const login = (uid: string): Action => ({
    type: 'LOGIN',
    uid
});

export const startLogin = async (user: User) => {
    try {
        const { token } = await UserAPI.login(user);
        console.log(token);
    } catch (error) {
        console.log('error', error);
    }
};

///////////// LOGOUT /////////////

export const logout = (): Action => ({
    type: 'LOGOUT'
});

export const startLogout = async () => {
    // POST /users/logout
    // requires authentication
};

///////////// CREATE ACCOUNT /////////////

export const startCreateAccount = async () => {
    // POST /users
    // need email and password
};