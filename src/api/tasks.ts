import axios from 'axios';
import { TaskResponse } from '../types/api.types';

export const routes = {
    GET_ALL_TASKS: '/tasks',
    GET_TASK: '/tasks/:id',
    CREATE_TASK: '/tasks',
    DELETE_TASK: '/tasks/:id',
    UPDATE_TASK: '/tasks/:id'
}

const getAllTasks = async (token: string) => {
    const response = await axios.get<TaskResponse>(routes.GET_ALL_TASKS, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response.data;
};

export default { 
    getAllTasks
};