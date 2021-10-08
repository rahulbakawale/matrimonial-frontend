import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { completeStep, isLogin, currentProfile} from '../utils/helpers';
import { AppRoutes } from 'constants/routes';
const PrivateRouteSteps = ({component: Component, ...rest}) => {
const renderRoutes = (props) => {
const pathname = props.location.pathname
const compStep = completeStep()
const mobileVerified = compStep?.mobile_verified
const qualification = compStep?.profile?.education
const occupation = compStep?.profile?.occupation
const documentation =  compStep?.profile?.documents
const images = compStep?.profile?.images
  // const basicDetails = compStep?.profile?.basic_detail

  // if(!compStep.mobile_verified ){
  //   return pathname === AppRoutes.VERIFYMOBILE ? <Component {...props} /> : <Redirect to='/verifymobile'/>
  // } else

    const handleRoute = () => {
      // if(!basicDetails){
      //   return pathname === AppRoutes.BASIC_DETAILS ? <Component {...props} /> : <Redirect to={ AppRoutes.BASIC_DETAILS } />
      // }
      if(!(compStep.father_page && compStep.mother_page)){
        return pathname === AppRoutes.PARENTSINFO ? <Component {...props} /> : <Redirect to='/parents-info' />
      }else if(!compStep.siblings_page){
        return pathname === AppRoutes.SIBLINGS ? <Component {...props} /> : <Redirect to='/siblings' />
      }else if(!compStep.partner_preference){
        return pathname === AppRoutes.PARTNER_PREFERENCE ? <Component {...props} /> : <Redirect to={AppRoutes.PARTNER_PREFERENCE } />
      }else if(!currentProfile()){
        return pathname === AppRoutes.PROFILES ? <Component { ...props } /> : <Redirect to='/profiles'/>
      }else if(!qualification){
        return pathname === AppRoutes.QUALIFICATIONS ? <Component { ...props } /> : <Redirect to={AppRoutes.QUALIFICATIONS} />
      }else if(!occupation){
        return pathname === AppRoutes.OCCUPATION ? <Component { ...props } /> : <Redirect to={AppRoutes.OCCUPATION} />
      }else if(!documentation){
        return pathname === AppRoutes.DOCUMENTS ? <Component { ...props } /> : <Redirect to={AppRoutes.DOCUMENTS} />
      }
      else{
        if([AppRoutes.PARENTSINFO, AppRoutes.SIBLINGS,
          AppRoutes.PARTNER_PREFERENCE,AppRoutes.PROFILES, 
          AppRoutes.QUALIFICATIONS,AppRoutes.OCCUPATION,AppRoutes.DOCUMENTS
          ,AppRoutes.BASIC_DETAILS].includes(pathname)){
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
