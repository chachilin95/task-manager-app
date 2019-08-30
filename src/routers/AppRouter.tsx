import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history';

// components
import Login from '../components/Login';
import TaskDashboard from '../components/TaskDashboard';
import AddTask from '../components/AddTask';
import EditTask from '../components/EditTask';
import NotFound from '../components/NotFound';

export const history = createHistory();

const AppRouter: React.FC = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route exact path='/dashboard' component={TaskDashboard}/>
                <Route exact path='/create' component={AddTask}/>
                <Route exact path='/edit/:id' component={EditTask}/>
                <Route exact component={NotFound}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;