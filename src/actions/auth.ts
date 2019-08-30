import { AuthenticationError } from '../utils/errors';
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
        return login(token);
    } catch (error) {
        throw new AuthenticationError(error);
    }
};

///////////// LOGOUT /////////////

export const logout = (): Action => ({
    type: 'LOGOUT'
});

export const startLogout = async () => {
    try {
        await UserAPI.logout();
        return logout();
    } catch (error) {
        throw new AuthenticationError(error);
    }
};

///////////// CREATE ACCOUNT /////////////

export const startCreateAccount = async () => {
    // POST /users
    // need email and password
};