import React from 'react';
import PrivateRoute from './components/login/privateRoute';
import PublicRoute from './components/login/publicRoute';
import Home from  './components/login/home';
import Login from './components/login/login';
import signup from './components/signup/signup';
import VerifyMobile from './components/VerifyMobile/VerifyMobile';
import { isLogin, currentUser } from './components/utils/helpers'

  import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,

  } from "react-router-dom";

  export default function app(){
    return(
      <Router>
        <div>
            <Switch>
              debugger
              {/* <Route path='/Home'    component={Home} />
              <Route path='/Login'   component={Login} /> */}
              <Route exact path="/">
                {!isLogin() ? <Redirect to="/login" /> :
                  (currentUser()['verified'] ? 
                <Redirect to="/home" /> : <Redirect to='/verifyMobile'/>) }
              </Route>

              <Route  component={Login} path="/login"  />
              <PrivateRoute component={Home} path="/home" />
              <Route path='/signup' component={signup} />
              <PublicRoute restricted={true} component={VerifyMobile} path="/verifyMobile" exact />
            </Switch>
         </div>
      </Router>
    );
  };
