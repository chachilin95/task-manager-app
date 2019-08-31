export interface User {
    email: string,
    password: string
}

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