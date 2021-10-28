import React from 'react';
import PrivateRoute from './components/routes/privateRoute';
import PrivateRoutSteps from './components/routes/privateRouteSteps'
// import PublicRoute from './components/routes/PublicRoute';
// import PrivateRouteOTP from './components/routes/privateRouteOTP';
import LandingPage from './components/landingpage/landingpage';
import Home from  './components/login/home';
import VerifyMobile from './components/verifymobile/verifymobile';
import UpdateUser from './components/updateUser/updateuser';
import ParentsInfo from './components/parentsInfo/ParentsInfo';
import Profile from 'components/profiles/profile';
import QualiFications from 'components/profiles/qualifications';
import OccupaTions from 'components/profiles/occupations';
import DocumentInfo from 'components/profiles/DocumentInfo';
import Sibling from './components/siblings/sibling';
import UserProfile from 'components/userProfiles/UserProfile';
import UserSetting from 'components/userSettings/userSetting';
import PartnerPreference from 'components/partnerPreferences/PartnerPreference';
import Notification from 'components/notification/notifications';
import SearchProfile from 'components/searchProfiles/SearchProfile';
import FavoriteProfile from 'components/favoriteprofiles/favoriteProfile';
import CompleteStep from 'components/CompleteStep/CompleteStep';
import PrivateRouteOTP from 'components/routes/privateRouteOTP';
import UserImg from  'components/userImages/UserImage';
import Footer from 'components/shared/footer'
//import Header from 'components/shared/header'
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
      {/* <Header />  */}
      <div className='main-section'>
        <Route exact='true' component={LandingPage} path="/" /> 
        <Switch>
          {/* <Route path='/Home'    component={Home} />
          <Route path='/Login'   component={Login} /> 
          <Route exact path="/">
            {!isLogin() ? <Redirect to="/login" /> :
              (currentUser()['verified'] ? 
            <Redirect to="/home" /> : <Redirect to='/verifyMobile'/>) }
          </Route>
          <Route  component={Login} path="/login" /> 
          <Route path='/signup' component={signup}  /> 
          <Route exact='true' component={LandingPage} path="/" /> */}
          <Route component={Home} path="/home"  />
          {/* <PrivateRoutSteps component={VerifyMobile} path="/verifyMobile"  /> */}
          <PrivateRouteOTP restricted={true} component={VerifyMobile} path="/verifyMobile" />
          <PrivateRoutSteps component={UpdateUser} path="/updateUser"  />
          <PrivateRoutSteps component={ParentsInfo} path="/parents-info" />
          <PrivateRoute component={ ParentsInfo } path="/user-Parents/:id/edit" />
          <PrivateRoutSteps component={Profile} path="/profiles"  />
          <PrivateRoutSteps component={QualiFications} path="/qualifications" />
          <PrivateRoutSteps component={OccupaTions} path="/occupations" />
          <PrivateRoutSteps component={DocumentInfo} path="/documents" />
          <Route component={UserImg} path="/user-image" />
          <PrivateRoute component={UserProfile} path="/user-profiles" />
          {/* create route with ID  profile (UserProfile) create button edit all routes  */}
          <PrivateRoute component={ Profile } path="/user-profile/:id/edit" />
          <PrivateRoute component={ QualiFications } path="/user-education/:id/edit" />
          <PrivateRoute component={ OccupaTions } path="/user-occupation/:id/edit" />
          <PrivateRoute component={ DocumentInfo } path="/user-document/:id/edit" />
          <PrivateRoutSteps component={Sibling} path="/siblings"  />
          <PrivateRoute component={Sibling} path="/add-siblings"  />

          <PrivateRoute component={Sibling} path="/siblings/:id/edit"  />
          <PrivateRoute component={UserSetting} path="/user-setting" />
          <PrivateRoutSteps  component={PartnerPreference} path="/partner-preference" /> 
          <PrivateRoute component={Notification} path="/notification" />
          <PrivateRoute component={SearchProfile} path="/search-profile" />
          <PrivateRoute component={FavoriteProfile} path="/favorite-profile" />
          <PrivateRoute  component={CompleteStep} path="/complete-step" />
        </Switch>
      </div>
      <Footer/>
    </Router>
  );
};

export default app
