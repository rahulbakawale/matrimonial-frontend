import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import userImg from 'assets/images/user.png';
import { getCompleteStep } from 'components/utils/helpers';
import axiosInstance from '../../axiosInstance'
import Header from 'components/shared/header'

const Sibling = ({ item,indexData }) => {
  return(
  <div class={`col-lg-4 col-md-4 col-sm-6 col-12 ${ indexData%3 !== 0 && 'rgt_border'} `}>
    <div class="detail_parent sibling_dtl" data-aos="zoom-in-right" data-aos-duration="1000">
      <p style={{ float: 'right'}}>
        <Link to={`/siblings/${ item.id }`} >
          <i className='far fa-edit'/>
        </Link>
      </p>
      <ul class="list-unstyled">
        <li>
          <b> Name :</b>
          <span>{item?.name}</span>
        </li>
        <li> 
          <b>Age :</b>
          <span>{item?.age}</span>
        </li>
        <li>
          <b>Gender :</b>
          <span> {item?.gender} </span>
        </li>
        <li>
          <b>Profession :</b>
          <span>{item?.profession}</span>
        </li>
        <li>
          <b>Married :</b>
          <span>{item?.married?.getString()}</span>
        </li>
      </ul>
    </div>
  </div>
  )
}
const UserProfile = (props) => {
  const [ profile, setProfile ] = useState({})
    useEffect(() => {
      async function onLoad() {
        try {
        const response = await axiosInstance.get(`/profiles`,{timeout: 5000})
          getCompleteStep(response.headers)  
          setProfile(response.data[ 0 ])
        } catch(e) {
          alert(e);
        }
      }
      onLoad()
    },[]) 
    console.log('testProfiles',profile)

return(
<>
<section class="user_profile_page">
  <div class="user_profile">
    <div class="container">
      <div class="row">
        <Header />
          <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-2">
            <div class="profile_content">
              <Link to={ `user-profile/${ profile.id }/edit`}  className="edit_img" ><i className="far fa-edit" >Edit</i></Link>
                <div class="profile_img" data-aos="zoom-out-right">
                  <img src={userImg} className="img-fluid" alt=""  />
                </div>
                <div class="profile_text" data-aos="zoom-in-up">
                  <div class="pro_text">
                    <h3>User Name</h3>
                      <p> <b>Name :</b> { profile.name } </p>
                      <p> <b>Gender :</b> { profile.gender } </p>
                      <p> <b>Age :</b> { profile.age } </p>
                      <p> <b>Caste :</b> { profile.caste }</p>  
                      <p> <b>Complexion :</b> { profile.complexion }</p>
                      <p> <b>Disable :</b> { profile.disable?.getString() } </p>
                      <p> <b>Divorced :</b> { profile.divorced?.getString() }</p>
                      <p> <b>Manglik :</b> { profile.manglik?.getString() }</p>
                  </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  </div>
<div class="user_detail">
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-4 col-12">
        <div class="user_info_box user_grd" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <div class="info_text">
          <Link to={`user-education/${profile.id }/edit`} class="edit_icon"><i class="far fa-edit"></i></Link>
            {
              profile?.education?.highest_qualification &&
              <div class='row'>
                <p><b> Qualification : </b>{profile?.education?.highest_qualification}</p>
              </div>
            }     
            {
              profile?.education?.graduation && <>
                <div class='row'>
                  <p> <b>Graduation  : </b>{profile?.education?.graduation}, {profile?.education?.graduation_college}, {profile?.education?.graduation_stream} </p>
                </div>
              </>
            }
            {
              profile?.education?.post_graduation && <>
                <div class='row'>
                  <p> <b>Post Graduation : </b>{profile?.education?.post_graduation}, {profile?.education?.post_graduation_college}, {profile?.education?.post_graduation_stream} </p>
                </div>
              </>
            }
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-4 col-12">
        <div class="user_info_box user_job" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <div class="info_text">
            <Link to={`user-occupation/${profile.id}/edit`}  class="edit_icon"><i class="far fa-edit"></i></Link>
              <div class='row'>
                <p> <b>Company :</b> {profile?.occupation?.company},  {profile?.occupation?.city} </p>
              </div>
              <div class='row'>
                <p> <b>Designation:</b> {profile?.occupation?.designation } </p>
              </div>
              <div class='row'>
                <p> <b>Salary :</b> {profile?.occupation?.salary} lakh </p>
              </div>
              <div class='row'>
                <p> <b>Located Abroad :</b> {profile?.occupation?.located_abroad?.getString()}</p>
              </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-4 col-sm-4 col-12">
          <div class="user_info_box user_lct" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
            <div class="info_text">
              <h4> <b> </b> { profile.place_of_birth }</h4>  
            </div>
          </div>
        </div>
    </div>
    </div>
  </div>
<div class="user_family">
  <div class=" container">
    <h3> <i class="fas fa-home"></i> Family Detail </h3>
  <div class="family_info">
      <Link to={`user-Parents/${profile.id}/edit`} class="edit_icon"><i class="far fa-edit"></i></Link>
      <div class="parent_info">
        <h5 class="fmly_info_heading">Father's Information</h5>
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
              <div class="detail_parent" data-aos="fade-right" data-aos-duration="1000">
                <ul class="list-unstyled">
                  <li>
                    <b>Father Name :</b>
                    <span>{profile?.father?.name}</span>
                  </li>
                  <li>
                    <b>Family Status :</b>
                    <span>{profile?.father?.family_status}</span>
                  </li>
                  <li>
                    <b>Profession :</b>
                    <span>{profile?.father?.profession}</span>
                  </li>
                  <li>
                    <b>Siblings:</b>
                    <span>{profile?.father?.siblings}</span>
                  </li>
                  <li>
                      <b>Passed away:</b>
                      <span>{profile?.father?.passed_away?.getString()}</span>
                  </li>
                </ul>
              </div>
            </div>
            {
              profile?.father?.extra_detail  &&
              <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                <div class="about_parent" data-aos="fade-down-left" data-aos-duration="1000">
                  <p><span>{profile?.father?.extra_detail}</span></p>
                </div>
              </div>
            }
          </div>
      </div>
      <div class="parent_info">
        <h5 class="fmly_info_heading">Mother's Information</h5>
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 col-12">
              <div class="detail_parent" data-aos="fade-down-right" data-aos-duration="1000">
                <ul class="list-unstyled">
                  <li>
                    <b>Mother Name :</b>
                    <span>{profile?.mother?.name}</span>
                  </li>
                  <li>
                    <b>Profession :</b>
                    <span>{profile?.mother?.profession}</span>
                  </li>
                  <li>
                    <b>Passed away:</b>
                    <span>{profile?.mother?.passed_away?.getString()}</span>
                  </li>
                </ul>
              </div>
            </div>
            {
              profile?.mother?.extra_detail  &&
              <div class="col-lg-6 col-md-6 col-sm-12 col-12">
                <div class="about_parent" data-aos="fade-down-left" data-aos-duration="1000">
                  <p><span>{profile?.mother?.extra_detail}</span></p>
                </div>
              </div>
            }
          </div>
        </div>
      <div class="parent_info">
      <h5 class="fmly_info_heading">Siblings Information: </h5>
      <Link to='/siblings'><br/>+Add</Link>
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-12">
          <div class="detail_parent">
          </div>
        </div>
        { (profile?.siblings || []).map((item,index) => {
          return( <Sibling key={ index }indexData={ index+1 } item={ item } />)
        })}
      </div>
    </div>
  </div>
  </div>
  </div> 
</section>
</>
)
}
Boolean.prototype.getString = function () {
  return this ? 'Yes' : 'No'
};

export default withRouter(UserProfile)
