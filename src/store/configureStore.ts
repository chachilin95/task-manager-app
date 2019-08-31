import { createStore, combineReducers } from 'redux';

// reducers
import AuthReducer from '../reducers/auth';
import TaskReducer from '../reducers/tasks';

export default () => {
    const store = createStore(
        combineReducers({
            auth: AuthReducer,
            tasks: TaskReducer
        }),
    );

    return store;
};