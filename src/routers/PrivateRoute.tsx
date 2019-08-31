import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

// import { State as ReduxState } from '../types/redux.types';

interface OwnProps {
    component: any,
    exact: boolean,
    path: string
};

interface StateProps {
    isAuthenticated: boolean
};

type Props = OwnProps & StateProps;

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}: Props) => {

    const renderComponent = (props: any) => (
        <div>
            <Header/>
            <Component {...props} />
        </div>
    );

    const renderRedirect = () => (
        <Redirect to='/' />
    );

    const renderRoute = (props: any) => (
        isAuthenticated ? renderComponent(props) : renderRedirect()
    );

    return (
        <Route {...rest} component={(props: any) => renderRoute(props)} />
    );
};

const mapStateToProps = (state: any) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);