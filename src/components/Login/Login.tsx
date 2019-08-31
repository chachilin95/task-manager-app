import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Props, DispatchProps } from './types';
import { DispatchType } from '../../types/redux.types';
import { startLogin } from '../../actions/auth';

export const LoginView: React.FC<Props> = ({ login }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [failed, setFailed] = useState(false);

    const submitLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await login({ email, password });
        } catch (error) {
            setFailed(true);
        }
    };

    const renderErrorMessage = () => {
        if (failed) {
            return <p>Login credentials were not accepted. Please try again</p>
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={submitLogin}>
                <input
                    type='text'
                    placeholder='ex. anonymous@example.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name='email' />
                <input
                    type='password'
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name='password' />
                <button>Login</button>
            </form>
            {renderErrorMessage()}
        </div>
    );
};

const mapDispatchToProps = (dispatch: DispatchType): DispatchProps => ({
    login: async (user) => {
        const action = await startLogin(user);
        dispatch(action);
    }
});

export default connect(undefined, mapDispatchToProps)(LoginView);