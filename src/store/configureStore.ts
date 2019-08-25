import { createStore, combineReducers } from 'redux';

// reducers
import TaskReducer from '../reducers/tasks';

export default () => {
    const store = createStore(
        combineReducers({
            TaskReducer
        }),
    );

    return store;
};