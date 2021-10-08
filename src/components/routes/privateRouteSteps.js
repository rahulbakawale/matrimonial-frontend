import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { completeStep, isLogin, currentProfile} from '../utils/helpers';
import { AppRoutes } from 'constants/routes';
const PrivateRouteSteps = ({component: Component, ...rest}) => {
  const renderRoutes = (props) => {
  const pathname = props.location.pathname
  const compStep = completeStep()
  const mobileVerified = compStep?.mobile_verified

    const handleRoute = () => {
      if(!(compStep.father_page && compStep.mother_page)){
        return pathname === AppRoutes.PARENTSINFO ? <Component {...props} /> : <Redirect to='/parents-info' />
      }else if(!compStep.siblings_page){
        return pathname === AppRoutes.SIBLINGS ? <Component {...props} /> : <Redirect to='/siblings' />
      }else if(!compStep.partner_preference){
        return pathname === AppRoutes.PARTNER_PREFERENCE ? <Component {...props} /> : <Redirect to={AppRoutes.PARTNER_PREFERENCE } />
      }else if(!currentProfile()){
        return pathname === AppRoutes.PROFILES ? <Component { ...props } /> : <Redirect to='/profiles'/>
      }else{
        if(pathname === AppRoutes.PARENTSINFO || pathname === AppRoutes.SIBLINGS ||
          pathname === AppRoutes.PARTNER_PREFERENCE || pathname === AppRoutes.PROFILES){
            return <Redirect to='/user-profiles' />
          }else{
            return <Component {...props} />
          }
 
      }
    }

    if(isLogin()){
      if(mobileVerified){
        if(!localStorage.gotoDashboard){
          return handleRoute()
        }else{
          return <Component {...props} />
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

export default PrivateRouteSteps;
