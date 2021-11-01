import React from 'react';
import Query from '../query/query';

import { withRouter, Link } from 'react-router-dom'

const Footer = (props) => {
  return(
    <>
      <section className={`footer_section` } >
        <div className="container">
          <ul className="list-inline">
            <li className="list-inline-item foot_menu">
            <Link to={ `/`}  className="breadcrumb-item"><i className="breadcrumb-item" ><a href="#">Home</a></i></Link>
            <a className="modalinit" href="javascript:;" data-toggle="modal" data-modal="query" > Enquirie</a>
            <a href="javascript:;">Contact Us</a> 
            <a href="javascript:;">Privacy Policy</a>
            </li>
            <li className="list-inline-item copy_right">Copyright <i className="far fa-copyright"></i> <a href="javascript:;">Kliftox Technology Pvt. ltd.</a> </li>
          </ul>
        </div>
      </section>
      <Query/>
    </>
    
  )
}

export default withRouter(Footer)
