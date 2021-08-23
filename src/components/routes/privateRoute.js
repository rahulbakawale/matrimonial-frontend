import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { completeStep, isLogin, currentProfile} from '../utils/helpers';
import { AppRoutes } from 'constants/routes';
const PrivateRoute = ({component: Component, ...rest}) => {



    const renderRoutes = (props) => {
       const pathname = props.location.pathname
       const mobileVerified = completeStep()?.mobile_verified
       if(isLogin()){
          if(mobileVerified){
            return (pathname === AppRoutes.QUALIFICATIONS && currentProfile() ) ? <Component {...props} /> : <Redirect to={AppRoutes.PROFILES} />
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
