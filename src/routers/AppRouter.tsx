import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';

// components
import Login from '../components/Login';
import CreateAccount from '../components/CreateAccount';
import TaskDashboard from '../components/TaskDashboard';
import AddTask from '../components/AddTask';
import EditTask from '../components/EditTask';
import NotFound from '../components/NotFound';

// route types
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter: React.FC = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute
                    exact
                    path='/'
                    component={Login} />
                <PublicRoute
                    exact
                    path='/createAccount'
                    component={CreateAccount} />
                <PrivateRoute
                    exact
                    path='/dashboard'
                    component={TaskDashboard} />
                <PrivateRoute
                    exact
                    path='/create'
                    component={AddTask} />
                <PrivateRoute
                    exact
                    path='/edit/:id'
                    component={EditTask} />
                <Route
                    exact
                    component={NotFound} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter;