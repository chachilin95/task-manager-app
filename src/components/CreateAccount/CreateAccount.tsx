import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Props, DispatchProps } from './types';
import { DispatchType } from '../../types/redux.types';
import { startCreateAccount } from '../../actions/auth';
import { validate } from './utils';
import { Link } from 'react-router-dom';

export const CreateAccountView: React.FC<Props> = ({ createAccount }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVerify, setPasswordVerify] = useState('');
    
    const [failed, setFailed] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const submitCreateAccount = async (e: React.FormEvent) => {
        e.preventDefault();

        const error = validate({ name, email, password, passwordVerify });
        if (error) {
            setFailed(true);
            setErrorMessage(error);
            return;
        }

        try {
            await createAccount({ name, email, password });
        } catch (error) {
            console.log('error', error);
            setFailed(true);
        }
    };

    const renderErrorMessage = () => {
        if (failed) {
            alert(errorMessage);
        }
    };

    return (
        <div>
            <h1>Create Account</h1>
            <form onSubmit={submitCreateAccount}>
                <input
                    type='text'
                    placeholder='Your Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name='name' />
                <input
                    type='text'
                    placeholder='Your Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name='email' />
                <input
                    type='password'
                    placeholder='Enter a password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name='password' />
                <input
                    type='password'
                    placeholder='Re-enter your password'
                    value={passwordVerify}
                    onChange={(e) => setPasswordVerify(e.target.value)}
                    name='passwordVerify' />
                <button>Create Account</button>
            </form>
            {renderErrorMessage()}
            <Link to='/'>Already Have an Account?</Link>
        </div>
    );
};

const mapDispatchToProps = (dispatch: DispatchType): DispatchProps => ({
    createAccount: async (user) => {
        const action = await startCreateAccount(user);
        dispatch(action);
    }
});

export default connect(undefined, mapDispatchToProps)(CreateAccountView);