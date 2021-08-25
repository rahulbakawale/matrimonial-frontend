import React from 'react';
import PrivateRoute from './components/routes/privateRoute';
//import PublicRoute from './components/routes/PublicRoute';
import PrivateRouteOTP from './components/routes/privateRouteOTP';
import Home from  './components/login/home';
import LandingPage from './components/LandingPage/landingpage';
import updateUser from './components/UpdateUser/updateuser';
import VerifyMobile from './components/VerifyMobile/VerifyMobile';
import Profile from 'components/Profiles/profile';
import QualiFications from 'components/Profiles/qualifications';
import OccupaTions from 'components/Profiles/occupations';
import DocumentInfo from 'components/Profiles/DocumentInfo'
import ParentsInfo from './components/ParentsInfo/ParentsInfo';
import CompleteStep from 'components/CompleteStep/CompleteStep';
//import Login from './components/login/login';
//import signup from './components/signup/signup';
//import { isLogin, currentUser } from './components/utils/helpers'


  import {
    BrowserRouter as Router,
    Switch,
   // Redirect,
    Route,

  } from "react-router-dom";
 
 const app = (props) => {

    return(
      <Router>
        <div>   
            <Switch>
              {/* <Route path='/Home'    component={Home} />
              <Route path='/Login'   component={Login} /> */}
              {/* <Route exact path="/">
                {!isLogin() ? <Redirect to="/login" /> :
                  (currentUser()['verified'] ? 
                <Redirect to="/home" /> : <Redirect to='/verifyMobile'/>) }
              </Route> */}
              {/* <Route  component={Login} path="/login" /> */}
              {/* <Route path='/signup' component={signup}  /> */}
              <Route exact='true' component={LandingPage} path="/" /> 
              <PrivateRoute component={Home} path="/home"  />
              <PrivateRoute  component={updateUser} path="/updateUser"  />
              <PrivateRoute  component={Profile} path="/profiles"  />
              <PrivateRoute component={QualiFications} path="/qualifications" />
              <PrivateRoute component={OccupaTions} path="/occupations" />
              <PrivateRoute component={DocumentInfo} path="/documents" />
              <PrivateRoute  component={ParentsInfo} path="/parents-info" />
              <PrivateRoute  component={CompleteStep} path="/complete-step" />
              <PrivateRoute restricted={true} component={VerifyMobile} path="/verifyMobile" exact />
            </Switch>
         </div>
      </Router>
    );
  };
  export default app