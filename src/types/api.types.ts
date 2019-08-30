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

export interface UserResponse {
    user: UserSchema,
    token: string
}