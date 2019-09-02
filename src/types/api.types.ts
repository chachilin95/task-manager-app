// user structure when returned from the db
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
};

// task structure when returned from the db
export interface TaskSchema {
    completed: boolean,
    _id: string,
    description: string,
    owner: string,
    createdAt: string,
    updatedAt: string
};

export type TasksResponse = TaskSchema[];
export type SingleTaskResponse = TaskSchema;