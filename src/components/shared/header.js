import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import logoImg from 'assets/images/logo.png';
import Query from '../query/query';
import NotificationDropDown from './notification-dropdown';

const Header = (props) => {
  const handleClick = () =>{
    localStorage.clear();
    props.history.push('/')
    }
  const path = props.location.pathname
    return(
    <>
      <nav className={`navbar navbar_menu navbar-expand-lg fixed-top ${ (path !== '/notification' && path !== '/favorite-profile') && 'nav_white' }`} id="sticky">
        <div className="container">
          <a className="logo" href="#">
            <img src={ logoImg } className="img-fluid" />
          </a>
          <button className="navbar-toggler menu-toggle" type="button" data-toggle="collapse" data-target="#mobile_nav" aria-controls="mobile_nav" aria-expanded="false" aria-label="Toggle navigation">
            <div className="mbmenu-icon"><span></span><span></span><span></span></div>
          </button>
          <div className="collapse navbar-collapse" id="mobile_nav">
            <ul className="navbar-nav menubar ml-auto">
              <li className="menu_link active">
                <Link to={ `/`}  className="breadcrumb-item"><i className="breadcrumb-item" ><a href="#">Home</a></i></Link>
              </li>
              <li className="menu_link">
                <a className="nav-link modalinit" href="javascript:;" data-toggle="modal" data-modal="query">About Us</a>
                {/* <a className="nav-link hvr-grow" href="javascript:;">About Us</a> */}
              </li>
              <li className="menu_link">
                <a className="nav-link hvr-grow" href="javascript:;">FAQ</a>
              </li>
              <li className="menu_link">
                <a className="nav-link hvr-grow" href="javascript:;">Contact Us</a>
              </li>
              <li className="dropdown ntf_btn">
                <NotificationDropDown />       
              </li>
              <li className="menu_link">
                <button type="submit" className="btn query_btn_denger" onClick={handleClick}>Logout</button>
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