export class AuthenticationError extends Error {
    constructor(message: string) {
        super();
        this.name = 'AuthenticationError';
        this.message = message;
    }
}