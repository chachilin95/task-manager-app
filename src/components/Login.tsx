import React, { useState } from 'react';

import { startLogin } from '../actions/auth';

const Login: React.FC = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        startLogin({ email, password });
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    placeholder='ex. anonymous@example.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name='email'/>
                <input
                    type='password'
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    name='password'/>
                <button>Login</button>
            </form>
        </div>
    );
};

export default Login;