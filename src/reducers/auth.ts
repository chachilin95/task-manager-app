import { State, Action } from '../types/auth.types';
import { Reducer } from 'redux';

const initState: State = { uid: '' };

const AuthReducer: Reducer<State, Action> = (state: State = initState, action: Action): State => {
    switch (action.type) {
        case 'LOGIN':
            return { uid: action.uid };
        case 'LOGOUT':
            return initState;
        default:
            return state;
    }
};

export default AuthReducer;