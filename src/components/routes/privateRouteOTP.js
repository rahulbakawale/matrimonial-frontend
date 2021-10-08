import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils/helpers';
import { completeStep } from '../utils/helpers';

const PrivateRouteOTP = ({component: Component, ...rest}) => {
  const compStep = completeStep()
  const mobileVerified = compStep?.mobile_verified
  return (
    <Route {...rest} render={props => (
      isLogin() ? 
      (mobileVerified ? <Redirect to="/user-profiles" />: 
      <Component {...props} />)
      : <Redirect to="/" />
    )} />
  );
};

export default PrivateRouteOTP;
