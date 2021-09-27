import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import userImg from 'assets/images/user.png';
import Header from 'components/shared/header';
import axiosInstance from '../../axiosInstance'

const FavoriteProfile = (props) => {
const [ favorites, setfavorites ] = useState([])
  useEffect(() => {
    async function onLoad() {
      try {
        const response = await axiosInstance.get(`/favorites`,{timeout: 10000}) 
        setfavorites(response.data.results)
      } catch(e) {
        alert(e);
      }
    }
  onLoad()
  console.log('Fav',favorites)
},[])    

const handleUnFav = (event, item) =>{
  const { profile: { id } } = item
    axiosInstance.delete(`/profiles/${ id }/favorites`,{timeout: 10000}).then((response) => {
    }).then((result) => {
      setfavorites((prevState) => {
        const newState = prevState.filter((fav) => fav?.id !== item?.id)
        return([
          ...newState
      ])
    })
  });
}

return(
<>
  <section class="page_banner">
      <div class="container">
        <div class="pgbanner_text">
          <h1>Favourite Members</h1>
          <Header />
          <div aria-label="breadcrumb">
            <ol class="breadcrumb">
              <Link to={ `/search-profile`}  className="breadcrumb-item"><i className="breadcrumb-item" ><a href="#">Home</a></i></Link>
              <Link to={`/favorite-profile`} class="breadcrumb-item active"><i aria-current="page"><a href="#">Favourite Members</a></i></Link>
            </ol>
          </div>
        </div>
      </div>
    </section>
  <section class="st_member">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 col-12">
        { favorites.map((favorite, index) => {
          return(
            <div key={ index } class="member_box">
              <div class="mem_nav">
                <ul class="nav nav-justified">
                  <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href={`#favourite${index}`} role="tab">
                    <i class="fas fa-user"></i> <span>Profile</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href={`#family${index}`} role="tab">
                    <i class="fas fa-home"></i> <span>Family</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href={`#education${index}`} role="tab">
                    <i class="fas fa-graduation-cap"></i> <span>Education</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href={`#profession${index}`} role="tab">
                    <i class="fas fa-briefcase"></i> <span>Profession</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="mem_content">
                <div class="row">
                  <div class="col-lg-4 col-md-4 col-sm-6 col-6">
                    <div class="mem_left_profile">
                      <img src={userImg} className="img-fluid" alt=""  />
                    </div>
                  </div>
                  <div class="col-lg-8 col-md-8 col-sm-12 col-12">
                    <div class="tab-content">
                      <div class="tab-pane fade in show active" id={`favourite${index}`} role="tabpanel">
                        <div class="user_detail">
                          <ul class="list-inline">
                            <li class="list-inline-item"><b>Name </b></li>
                            <li class="list-inline-item"><span>{favorite?.profile?.name}</span></li>
                          </ul>                              
                          <ul class="list-inline">
                            <li class="list-inline-item"><b>Father Name</b></li>
                            <li class="list-inline-item"><span>{favorite?.father?.name}</span></li>
                          </ul>
                          <ul class="list-inline">
                            <li class="list-inline-item"><b>Gender </b></li>
                            <li class="list-inline-item"><span>{favorite?.profile?.gender}</span></li>
                          </ul>
                          <ul class="list-inline">
                            <li class="list-inline-item"><b>Age </b></li>
                            <li class="list-inline-item"><span>{favorite?.profile?.age} Yrs</span></li>
                          </ul>
                          <ul class="list-inline">
                            <li class="list-inline-item"><b>Date Of Birth </b></li>
                            <li class="list-inline-item"><span>{favorite?.profile?.dob}</span></li>
                          </ul>
                          <ul class="list-inline">
                            <li class="list-inline-item"><b>complexion </b></li>
                            <li class="list-inline-item"><span>{favorite?.profile?.complexion}</span></li>
                          </ul>
                        </div>
                      </div>
                      <div class="tab-pane fade" id={`family${index}`} role="tabpanel">
                        <div class="family_detail">
                            <ul class="list-inline">
                              <li class="list-inline-item"><b>Father Name</b></li>
                              <li class="list-inline-item"><span>{favorite?.father?.name}</span></li>
                            </ul>
                            <ul class="list-inline">
                              <li class="list-inline-item"><b> F-Profession</b></li>
                              <li class="list-inline-item"><span>{favorite?.father?.profession}</span></li>
                            </ul>
                            <ul class="list-inline">
                              <li class="list-inline-item"><b>Mother Name</b></li>
                              <li class="list-inline-item"><span>{favorite?.mother?.name}</span></li>
                            </ul>
                            <ul class="list-inline">
                              <li class="list-inline-item"><b>M-Profession</b></li>
                              <li class="list-inline-item"><span>{favorite?.mother?.profession}</span></li>
                            </ul>
                            <ul class="list-inline">
                              <li class="list-inline-item"><b>Siblings</b></li>
                              <li class="list-inline-item"><span>{favorite?.father?.siblings}</span></li>
                            </ul>
                            <ul class="list-inline">
                              <li class="list-inline-item"><b>Family-Status</b></li>
                              <li class="list-inline-item"><span>{favorite?.father?.family_status}</span></li>
                            </ul>
                            {/* <ul class="list-inline">
                              <li class="list-inline-item"><b>Passed-Away</b></li>
                              <li class="list-inline-item"><span>{favorite?.father?.passed_away?.getString()}</span></li>
                            </ul> */}
                        </div>
                      </div>
                      <div class="tab-pane fade" id={`education${index}`} role="tabpanel">
                        <div class="edu_detail">
                          <ul class="list-inline">
                            <li class="list-inline-item"><b>Qualification </b></li>
                            <li class="list-inline-item"><span>{favorite?.profile?.education?.highest_qualification}</span></li>
                          </ul>
                          <ul class="list-inline">
                            <li class="list-inline-item"><b>Graduation </b></li>
                            <li class="list-inline-item"><span>{favorite?.profile?.education?.graduation_college}</span></li>
                          </ul>
                          <ul class="list-inline">
                            <li class="list-inline-item"><b>G-Stream</b></li>
                            <li class="list-inline-item"><span>{favorite?.profile?.education?.graduation_stream}</span></li>
                          </ul>
                          <ul class="list-inline">
                            <li class="list-inline-item"><b>G-College</b></li>
                            <li class="list-inline-item"><span>{favorite?.profile?.education?.graduation_college}</span></li>
                          </ul>
                        </div>
                      </div>
                        <div class="tab-pane fade" id={`profession${index}`} role="tabpanel">
                          <div class="edu_detail">
                            {/* <ul class="list-inline">
                              <li class="list-inline-item"><b>City </b></li>
                              <li class="list-inline-item"><span></span></li>
                            </ul> */}
                            <ul class="list-inline">
                              <li class="list-inline-item"><b>Company </b></li>
                              <li class="list-inline-item"><span>{favorite?.profile?.occupation?.company},{favorite?.profile?.occupation?.city}</span></li>
                            </ul>
                            <ul class="list-inline">
                              <li class="list-inline-item"><b>Employed </b></li>
                              <li class="list-inline-item"><span>{favorite?.profile?.occupation?.employed_in}</span></li>
                            </ul>
                            <ul class="list-inline">
                              <li class="list-inline-item"><b>Designation </b></li>
                              <li class="list-inline-item"><span>{favorite?.profile?.occupation?.designation} Yrs</span></li>
                            </ul>
                            <ul class="list-inline">
                              <li class="list-inline-item"><b>Salary </b></li>
                              <li class="list-inline-item"><span>{favorite?.profile?.occupation?.salary}Lac</span></li>
                            </ul>
                            <ul class="list-inline">
                              <li class="list-inline-item"><b>Located Abroad</b></li>
                              <li class="list-inline-item"><span>{favorite?.profile?.occupation?.located_abroad?.getString()}</span></li>
                            </ul>        
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="bottom_fav">
                      <li className="list-inline-item">
                        <a href="#" onClick={ (event) => handleUnFav(event,favorite) } >
                          <i class="far fa-star"></i>
                          Unfavourite
                        </a>   
                      </li>
                    </div> 
                  </div>
                </div>
              </div>
              )
              } )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

Boolean.prototype.getString = function (value) {
  return this ? 'Yes' : 'No'
};
 
export default withRouter(FavoriteProfile)
