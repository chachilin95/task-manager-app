import { Action, Task } from '../types/tasks.types'

export const addTask = (task: Task): Action => ({
    type: 'ADD_TASK',
    task
});

export const deleteTask = (id: string): Action => ({
    type: 'DELETE_TASK',
    id
});

export const setTasks = (tasks: Task[]): Action => ({
    type: 'SET_TASKS',
    tasks
});