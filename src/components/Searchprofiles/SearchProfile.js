import React, {  useState,useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import userImg from 'assets/images/user.png'
import weddingImg from 'assets/images/wedding_knot.png'
import axiosInstance from '../../axiosInstance'

const SearchProfile = (props) => {
    const [ search, setsearch ] = useState({})
    const [ searchResult, setSearchResult ] = useState([])

    const [ favorites , setFavorites ] = useState([])

    useEffect(() => {
        
        async function onLoad() {
          try {
           const response = await axiosInstance.get(`/search`,{timeout: 5000})
           setsearch(response.data)
           setSearchResult(response.data.results)
               
          } catch(e) {
            alert(e);
          }
        }
        onLoad()

    },[])

    const getFavorites = async() => {
        try {
            const response = await axiosInstance.get(`/favorites`,{timeout: 5000}) 
            setFavorites(response.data.results)
                
           } catch(e) {
             alert(e);
        }
    }

    useEffect(() => {
        getFavorites()

    },[])
  
    console.log('testSearch',search)

    const handleFav = (event, item) =>{
            const { id } = item
            if(!item.favourite){
                axiosInstance.post(`/profiles/${ id }/favorites`).then((response) => {
                }).then((result) => {
                    setSearchResult((prevState) => {
                        prevState.filter((item) => item.id === id)[0].favourite = true
                        return([
                          ...prevState
                        ])
                    })
                    getFavorites()

                });

            }else{
                axiosInstance.delete(`/profiles/${ id }/favorites`).then((response) => {
                }).then((result) => {
                    setSearchResult((prevState) => {
                        prevState.filter((item) => item.id === id)[0].favourite = false
                        return([
                          ...prevState
                        ])
                    })
                    getFavorites()

                });
            }
           
    }
    
    console.log('src',SearchProfile)   

return(
        <>
            <a id="btntotop"></a>
            <section className="page_banner">
                <div className="container">
                    <div className="pgbanner_text">
                        <h1>Member Profile</h1>
                        <div aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Member</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <div className="pg_heading">
                <h2>All Members</h2>
                <div className="hedding_desg position-relative">
                    <img src={weddingImg} className="" />
                </div>
            </div>
            <section className="all_member">
                <div className="container">
                    <div className="row">
                        { (search?.results || []).map((item,index) => {
                        return(
                        <div key={ index } className="col-lg-3 col-md-4 col-sm-6 col-12">
                            <div className="view_member">
                                <div className="view_mbr_img">
                                    <img src={userImg} classNameName="img-fluid" alt=""  />
                                    <div className="view_iconlist">
                                        <ul className="list-inline">
                                            <li className="list-inline-item">
                                                <a href="javascript:;">
                                                <i className="fas fa-thumbs-up"></i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="#" onClick={ (event) => handleFav(event,item) } >
                                                <i className={`${ item.favourite ? 'fas' : 'far'} fa-star`}></i>
                                                </a>
                                            </li>
                                            <li className="list-inline-item">
                                                <a href="javascript:;" className="disabled">
                                                <i className="fas fa-share"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="view_mbr_txt">
                                <h1>User Profile </h1>
                                    <ul class="list-inline">     
                                        <li class="list-inline-item"><h5>{item?.name}</h5></li><br/>
                                        <li class="list-inline-item"><h5>{item?.gender}</h5></li><br/>

                                        <li class="list-inline-item"><h5>{item?.age}</h5></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        )
                        })
                        }
                    </div>
                </div>
            </section>
                    
            <section className="fav_slider">
                <div className="pg_heading">
                    <h2>Favourite Members</h2>
                    <div className="hedding_desg position-relative">
                        <img  src={weddingImg} className="" />
                    </div>
                </div>
                <div class="owl-carousel owl-theme owl-loaded owl-drag">
                    <div class="owl-stage-outer">
                        <div class="owl-stage">
                            { favorites.map((item, index) => {
                                return(     
                             <div class="owl-item cloned">
                                <div class="item">
                                <div class="fav_mbr">
                                    <div class="mbr_flip_box">
                                        <div class="flip-box-front text-center">
                                            <img src={ userImg } alt="" class="img-fluid" />
                                            <div class="inner color-white user_name">
                                            <li>
                                            <h5>User Name</h5>
                                            <li><span>{item?.profile?.Name}</span></li>
                                            </li>
                                        </div>
                                    </div>
                                    <div class="flip-box-back text-center">
                                        <img src={ userImg } alt="" class="img-fluid" />
                                        <div class="inner color-white user_detail">
                                        <ul class="list-unstyled">
                                        <ul className="list-unstyled">
                                        <ul class="list-inline">
                                            <li class="list-inline-item"><b>Name :</b></li>
                                            <li class="list-inline-item"><span>{item?.profile?.name}</span></li>
                                        </ul>
                                        
                                                </ul>
                                            <Link to={"/favorite-profile"}class="view_link">View Profile</Link>

                                        </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                </div>
                            </div>
)
                            })}

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}




















export default withRouter(SearchProfile)








