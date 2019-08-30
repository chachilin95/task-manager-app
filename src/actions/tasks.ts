import { Action, Task } from '../types/tasks.types'

///////////// ADD TASK /////////////

export const addTask = (task: Task): Action => ({
    type: 'ADD_TASK',
    task
});

export const startAddTask = (task: Task) => {
    // POST /tasks
    // requires authentication
};

///////////// DELETE TASK /////////////

export const deleteTask = (id: string): Action => ({
    type: 'DELETE_TASK',
    id
});

export const startDeleteTask = (id: string) => {
    // DELETE /tasks/:id
    // requires authentication and ownership of task
};

///////////// GET ALL TASKS /////////////

export const setTasks = (tasks: Task[]): Action => ({
    type: 'SET_TASKS',
    tasks
});

export const startSetTasks = () => {
    // GET /tasks
    // requires authentication
};