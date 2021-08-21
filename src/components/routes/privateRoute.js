import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { completeStep, isLogin } from '../utils/helpers';

const PrivateRoute = ({component: Component, ...rest}) => {
    const mobileVerified = completeStep()?.mobile_verified

    return (
        <Route {...rest} render={props => {
            return(
            isLogin() ? (mobileVerified ? <Component {...props} /> : <Redirect to="/verifyMobile" />)
            : <Redirect to="/" />
        ) } } />
    );
};

export default PrivateRoute;
