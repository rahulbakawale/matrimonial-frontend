import React from 'react'
import { withRouter, Link } from 'react-router-dom';

const Footer = (props) => {

    


return(
        <>
            <section className={`footer_section` } >
                <div className="container">
                <ul className="list-inline">
                    <li className="list-inline-item foot_menu">
                    <Link to={ `/search-profile`}  className="breadcrumb-item"><i className="breadcrumb-item" ><a href="#">Home</a></i></Link>
                    <a href="javascript:;">About Us</a> 
                    <a href="javascript:;">FAQ</a> 
                    <a href="javascript:;">Contact Us</a> 
                    <a href="javascript:;">Privacy Policy</a>
                    </li>
                    <li className="list-inline-item copy_right">Copyright <i className="far fa-copyright"></i> <a href="javascript:;">Kliftox Technology Pvt. ltd.</a> </li>
                </ul>
                </div>
            </section>
        </>
    )
}


export default withRouter(Footer)