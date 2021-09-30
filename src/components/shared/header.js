import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import logoImg from 'assets/images/logo.png';
import Query from '../query/query';
import NotificationDropDown from './notification-dropdown';

const Header = (props) => {
  const path = props.location.pathname
    return(
    <>
      <nav class={`navbar navbar_menu navbar-expand-lg fixed-top ${ (path !== '/notification' && path !== '/favorite-profile') && 'nav_white' }`} id="sticky">
        <div class="container">
          <a class="logo" href="#">
            <img src={ logoImg } class="img-fluid" />
          </a>
          <button class="navbar-toggler menu-toggle" type="button" data-toggle="collapse" data-target="#mobile_nav" aria-controls="mobile_nav" aria-expanded="false" aria-label="Toggle navigation">
            <div class="mbmenu-icon"><span></span><span></span><span></span></div>
          </button>
          <div class="collapse navbar-collapse" id="mobile_nav">
            <ul class="navbar-nav menubar ml-auto">
              <li class="menu_link active">
                <Link to={ `/search-profile`}  className="breadcrumb-item"><i className="breadcrumb-item" ><a href="#">Home</a></i></Link>
              </li>
              <li class="menu_link">
                <a className="nav-link modalinit" href="javascript:;" data-toggle="modal" data-modal="query">About Us</a>
                {/* <a class="nav-link hvr-grow" href="javascript:;">About Us</a> */}
              </li>
              <li class="menu_link">
                <a class="nav-link hvr-grow" href="javascript:;">FAQ</a>
              </li>
              <li class="menu_link">
                <a class="nav-link hvr-grow" href="javascript:;">Contact Us</a>
              </li>
              <li class="dropdown ntf_btn">
                <NotificationDropDown />       
              </li>
            </ul>
            <Query/>
          </div>
        </div>
      </nav>
    </>
  )
}

            
export default withRouter(Header)