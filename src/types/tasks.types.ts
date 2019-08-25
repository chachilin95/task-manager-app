export type Task = {
    id?: string,
    description: string,
    completed: boolean
};

export type State = Task[];

export type Action =
    | {
        type: 'ADD_TASK',
        task: Task
    } | {
        type: 'DELETE_TASK',
        id: string
    } | {
        type: 'SET_TASKS',
        tasks: State
    };