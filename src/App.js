import React from 'react';
import PrivateRoute from './components/login/privateRoute';
import PublicRoute from './components/login/publicRoute';
import Home from  './components/login/home';
import LandingPage from './components/LandingPage/landingpage';
import updateUser from './components/UpdateUser/updateuser';
import VerifyMobile from './components/VerifyMobile/VerifyMobile';
import Profile from 'components/Profiles/profile';
import QualiFications from 'components/Profiles/qualifications' 
//import Login from './components/login/login';
//import signup from './components/signup/signup';
//import { isLogin, currentUser } from './components/utils/helpers'


  import {
    BrowserRouter as Router,
    Switch,
    Redirect,
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
              <Route  component={Profile} path="/profiles"  />
              <Route component={QualiFications} path="/qualifications" />

              <PublicRoute restricted={true} component={VerifyMobile} path="/verifyMobile" exact />
            </Switch>
         </div>
      </Router>
    );
  };
  export default app