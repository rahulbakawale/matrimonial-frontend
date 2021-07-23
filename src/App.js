import React from 'react';
import PrivateRoute from './components/login/privateRoute';
import PublicRoute from './components/login/publicRoute';
import Home from  './components/login/home';
import Login from './components/login/login';

 
  import {
    BrowserRouter as Router,
    Switch,
    Route,

  } from "react-router-dom";

  export default function app(){
    return(
      <Router>
        <div>
            <Switch>
              {/* <Route path='/Home'    component={Home} />
              <Route path='/Login'   component={Login} /> */}
              <PublicRoute restricted={true} component={Login} path="/login" exact />
              <PrivateRoute component={Home} path="/home" exact />
            </Switch>
         </div>
      </Router>
    );
  };
