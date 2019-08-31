import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { getAuthToken } from './utils/auth';
import { login, logout } from './actions/auth';

const store = configureStore();
const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('root'));
        hasRendered = true;
    }
};

const checkAuthentication = function() {
    var firstTime = true;
    var prevToken = getAuthToken();

    return function() {
        let token = getAuthToken();

        if (token !== prevToken || firstTime) {
            if (token) {
                store.dispatch(login(token));
                // TODO: Get expenses from db
                renderApp();
                if (history.location.pathname === '/') {
                    history.push('/dashboard');
                }
            } else { 
                store.dispatch(logout());
                renderApp();
                history.push('/');
            }

            prevToken = token;
            firstTime = false;
        }
    };
};

// watch for auth_token
checkAuthentication();
setInterval(checkAuthentication(), 250);