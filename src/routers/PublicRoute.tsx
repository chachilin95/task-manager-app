import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// import { State as ReduxState } from '../types/redux.types';

interface OwnProps {
    component: React.FC,
    exact: boolean,
    path: string
};

interface StateProps {
    isAuthenticated: boolean
};

type Props = OwnProps & StateProps;

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}: Props) => {

    const renderComponent = (props: any) => (
        <Component {...props} />
    );

    const renderRedirect = () => (
        <Redirect to='/dashboard' />
    );

    const renderRoute = (props: any) => (
        !isAuthenticated ? renderComponent(props) : renderRedirect()
    );

    return (  
        <Route {...rest} component={(props: any) => renderRoute(props)} />
    );
}
const mapStateToProps = (state: any, props: any): StateProps => ({
    isAuthenticated: !!state.auth.uid,
    ...props
});

export default connect(mapStateToProps)(PublicRoute);