import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils/helpers';

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            !isLogin() ?
                <Redirect to="/login" />
            : <Component {...props} {...rest } />
        )} />
    );
};

export default PublicRoute;
