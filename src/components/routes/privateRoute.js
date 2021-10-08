import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { completeStep, isLogin, currentProfile} from '../utils/helpers';
import { AppRoutes } from 'constants/routes';
const PrivateRoute = ({component: Component, ...rest}) => {
  const renderRoutes = (props) => {
  const compStep = completeStep()
  const mobileVerified = compStep?.mobile_verified
    const validate = () => {
        return compStep?.father_page && compStep?.mother_page && compStep?.partner_preference &&
        compStep?.profile && compStep?.siblings_page
    }
    if(isLogin()){
      if(mobileVerified){
        if(validate()){
          return <Component {...props} />
        }else{
          return <Redirect to='/parents-info' />
        }
      }else{
        return<Redirect to="/verifyMobile" />
      }
    }else{
      return( <Redirect to='/' />)
    }
  }
  return (
  <Route {...rest} render={props => {
    return renderRoutes(props)
    } } />
  );
};

export default PrivateRoute;
