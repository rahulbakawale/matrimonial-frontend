import React, { useState, useEffect } from 'react';
import { withRouter, Link} from 'react-router-dom';
import userImg from 'assets/images/user.png';
import Header from 'components/shared/header';
import axiosInstance from '../../axiosInstance'

const Notification = (props) => {
  const [ notifications, setNotifications ] = useState([])
    useEffect(() => {
      async function onLoad() {
        try {
          const response = await axiosInstance.get(`/notifications`,{timeout: 5000})  
          setNotifications(response.data.results)
        } catch(e) {
          alert(e);
        }
      }
    onLoad()
  },[])
  console.log("ntest",notifications)
  return(
    <>
    <Header />
    <section class="page_banner">
      <div class="container">
        <div class="pgbanner_text">
          <h1>Notification Page</h1>
          <div aria-label="breadcrumb">
            <ol class="breadcrumb">
              <Link to={ `/search-profile`}  className="breadcrumb-item"><i className="breadcrumb-item" ><a href="#">Home</a></i></Link>
              <Link to={`/notification`} class="breadcrumb-item active">
              <i className="breadcrumb-item" ><a href="#">Notification</a></i></Link> 
            </ol>
          </div>
        </div>
      </div>
    </section>
    <section class="form_texture">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 offset-lg-2 col-md-8 offset-md-2 col-sm-10 offset-sm-1 col-12">
            <div class="notfi_page">
              { notifications.map((notification, index) => {
              return (
              <div class="notfi_box">
                <div class="notf_img">
                  <img src={userImg} className="img-fluid" alt=""  />
                </div>
                <div key={ index } class="notf_text">
                  <ul class="list-unstyled">
                    <li>
                      <span>{notification?.title}</span>
                    </li>
                  </ul>
                </div>
                <div class="notf_icon">
                  <i class="fas fa-bell"></i>
                </div>
              </div>
              )
              })}  
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
export default withRouter(Notification)
