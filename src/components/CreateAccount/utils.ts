import validator from 'validator';

interface ValidateArgs {
    name: string, 
    email: string, 
    password: string, 
    passwordVerify: string
}

// determine error message
export const validate = ({ name, email, password, passwordVerify }: ValidateArgs) => {

    if (name === '') {
        return 'You must enter a name';
    }

    if (!validator.isEmail(email)) {
        return 'You must enter a valid email';
    }

    if (password !== passwordVerify) {
        return 'The passwords do not match';
    }
};