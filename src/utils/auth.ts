import Cookies from 'js-cookie';

export const getAuthToken = () => {
    const token = Cookies.get('auth_token');
    return token;
};