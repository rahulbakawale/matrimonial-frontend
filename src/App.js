import React from 'react';
import Home from  './components/home';
import Login from './components/login';
 
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
              <Route path='/Home'    component={Home} />
              <Route path='/Login'   component={Login} />
            </Switch>
         </div>
      </Router>
    );
  };
