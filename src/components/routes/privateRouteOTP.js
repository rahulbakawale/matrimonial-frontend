import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils/helpers';


const PrivateRouteOTP = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};

export default PrivateRouteOTP;
