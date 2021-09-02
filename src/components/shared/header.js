import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import logoImg from 'assets/images/logo.png'


const Header = () => {

    return(
        <>
            <nav class="navbar navbar_menu navbar-expand-lg fixed-top nav_white" id="sticky">
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
                                <a class="nav-link hvr-grow" href="javascript:;">About Us</a>
                            </li>
                            <li class="menu_link">
                                <a class="nav-link hvr-grow" href="javascript:;">FAQ</a>
                            </li>
                            <li class="menu_link">
                                <a class="nav-link hvr-grow" href="javascript:;">Contact Us</a>
                            </li>
                            <li class="dropdown ntf_btn">
                                <a class="nav-link ntf_bell" href="javascript:;" id="ntf_bell" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="fas fa-bell"></i>
                                <mark class="rubberBand">9</mark>
                                </a>
                                <div class="dropdown-menu ntf_box" aria-labelledby="ntf_bell">
                                    <div class="ntf_heading">
                                        <h5>Notification</h5>
                                        <a href="javascript:;"><i class="fas fa-cog"></i></a>
                                    </div>
                                    <div role="alert" aria-live="assertive" aria-atomic="true" class="toast ntf_txt" data-autohide="false">
                                        <div class="ntf_toast_box">
                                            <div class="toast-header">
                                                <i class="fas fa-circle"></i>
                                                <span>Jivesh Jaiswal and 8 others have viewed your profile.</span>
                                                <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="ntf_btm">
                                                <a href="javascript:;" class="ntf_view">view</a>
                                                <small>11 mins ago</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

            
export default withRouter(Header)