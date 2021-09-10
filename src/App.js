import React from 'react';
import PrivateRoute from './components/routes/privateRoute';
//import PublicRoute from './components/routes/PublicRoute';
// import PrivateRouteOTP from './components/routes/privateRouteOTP';
import Home from  './components/login/home';
import LandingPage from './components/LandingPage/landingpage';
import VerifyMobile from './components/VerifyMobile/VerifyMobile';
import sibling from './components/Sibling/sibling';
import updateUser from './components/UpdateUser/updateuser';
import ParentsInfo from './components/ParentsInfo/ParentsInfo';
import Profile from 'components/Profiles/profile';
import QualiFications from 'components/Profiles/qualifications';
import OccupaTions from 'components/Profiles/occupations';
import DocumentInfo from 'components/Profiles/DocumentInfo'
import UserProfile from 'components/userProfiles/UserProfile';
import SearchProfile from 'components/Searchprofiles/SearchProfile';
import FavoriteProfile from 'components/favoriteprofiles/favoriteProfile';
import UserSetting from 'components/userSettings/userSetting';
import Notification from 'components/Notification/notification';
import PartnerPreference from 'components/PartnerPreferences/PartnerPreference';
import CompleteStep from 'components/CompleteStep/CompleteStep'
import Footer from 'components/shared/footer'

 import Header from 'components/shared/header'

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
        <Header /> 

        <div>
        <Route exact='true' component={LandingPage} path="/" /> 

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
              <PrivateRoute  component={sibling} path="/siblings"  />
              <Route component={Home} path="/home"  />
              <Route restricted={true} component={VerifyMobile} path="/verifyMobile" />
              <Route  component={updateUser} path="/updateUser"  />
              <Route  component={ParentsInfo} path="/parents-info" />
              <Route  component={Profile} path="/profiles"  />
              <Route component={QualiFications} path="/qualifications" />
              <Route component={OccupaTions} path="/occupations" />
              <Route component={DocumentInfo} path="/documents" />
              <Route component={UserProfile} path="/user-profiles" />
              {/* create route with ID  profile (UserProfile) create button edit all routes  */}
              <Route component={ Profile } path="/user-profile/:id/edit" />
              <Route component={ QualiFications } path="/user-education/:id/edit" />
              <Route component={ OccupaTions } path="/user-occupation/:id/edit" />
              <Route component={ DocumentInfo } path="/user-document/:id/edit" />
              <Route component={ ParentsInfo } path="/user-Parents/:id/edit" />




              <Route component={SearchProfile} path="/search-profile" />
              <Route component={FavoriteProfile} path="/favorite-profile" />
              <Route component={UserSetting} path="/user-setting" />
              <Route component={Notification} path="/notification" />
              <Route component={PartnerPreference} path="/partner-preference" /> 
              <PrivateRoute  component={CompleteStep} path="/complete-step" />
            </Switch>
         </div>
         <Footer/>

      </Router>
    );
  };
  export default app