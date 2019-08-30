import React, { useState } from 'react';

import { startLogin } from '../actions/auth';

const Login: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [failed, setFailed] = useState(false);

    const submitLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await startLogin({ email, password });
        } catch (error) {
            setFailed(true);
        } finally {
            setEmail('');
            setPassword('');
        }
    };

    const renderErrorMessage = () => {
        if (failed) {
            return <p>Login credentials were not accepted. Please try again</p>
        }
    }

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

export default Login;