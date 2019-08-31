import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Props, DispatchProps } from './types';
import { DispatchType } from '../../types/redux.types';
import { startLogout } from '../../actions/auth';

const Header: React.FC<Props> = ({ logout }) => {

    const invokeLogout = async (e: React.MouseEvent) => {
        e.preventDefault();

        try {
            await logout();
        } catch (error) {
            throw new Error(error);
        }
    };

    return (
        <header>
            <Link to='/dashboard'>
                <h1>Task Manager</h1>
            </Link>
            <button onClick={invokeLogout}>Logout</button>
        </header>
    );
};

const mapDispatchToProps = (dispatch: DispatchType): DispatchProps => ({
    logout: async () => {
        const action = await startLogout();
        dispatch(action);
    }
});
    
export default connect(undefined, mapDispatchToProps)(Header);