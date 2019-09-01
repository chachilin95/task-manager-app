export interface LoginUser {
    email: string,
    password: string
};

export interface CreateUser {
    name: string,
    email: string,
    password: string
};

export type State = {
    uid: string
};

export type Action = 
    | {
        type: 'LOGIN',
        uid: string
    } | {
        type: 'LOGOUT'
    }