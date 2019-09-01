import { Task } from "./tasks.types";

export interface UserSchema {
    name: string,
    email: string,
    password: string,
    age: number,
    tokens: {
        token: string
    }[],
    avatar: Buffer
};

export type UserResponse = {
    user: UserSchema,
    token: string
}

export interface TaskSchema {
    description: string,
    completed: boolean,
    owner: string
}

export type TaskResponse = Task[];