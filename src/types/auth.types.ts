export type User = {
    email: string,
    password: string
};

export type State = User;

export type Action = 
    | {
        type: 'LOGIN',
        uid: string
    } | {
        type: 'LOGOUT'
    }