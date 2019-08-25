import uuid from 'uuid';
import { State, Action, Task } from '../types/tasks.types';

export default (state: State = [], action: Action): State => {
    switch (action.type) {
        case 'ADD_TASK':
            const newTask: Task = {
                id: uuid(),
                description: action.task.description,
                completed: false
            }
            return [...state, newTask];
        case 'DELETE_TASK':
            return state.filter((task) => task.id !== action.id);
        case 'SET_TASKS':
            return [...action.tasks];
        default:
            return state;
    }
};