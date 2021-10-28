import React,{ useState, useEffect } from 'react';
import { withRouter, Link} from 'react-router-dom';
import userImg from 'assets/images/user.png';
import axiosInstance from '../../axiosInstance'

const NotificationDropDown = () => {
  const [ notifications, setNotifications ] = useState([])
  const [ count, setCount ] = useState(0)
  useEffect(() => {
    async function onLoad() {
      try {
        const response = await axiosInstance.get(`/notifications`,{timeout: 5000}) 
        setCount(response.data.results.length) 
        const notifications = response.data.results?.splice(0,6)
        setNotifications(notifications)
      } catch(e) {
        alert(e);
      }
    }
   onLoad()
  },[])
  return(          
  <>
    <li class="dropdown ntf_btn">
      {/* <div class="dropdown-menu ntf_box" aria-labelledby="ntf_bell">
        <div class="ntf_heading">
          <h5>Notification</h5>
          <Link to={`/user-setting`} href="javascript:;"><i className="fas fa-cog"></i></Link>
        </div>
      </div> */}
      <a class="nav-link ntf_bell" href="#" id="ntf_bell" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
        <i class="fas fa-bell"></i>
        
        <mark class="rubberBand">{ count }</mark>
      </a>
      
      <div class="dropdown-menu ntf_box" aria-labelledby="ntf_bell">
        <ul class="list-unstyled notification-list-style">
          <div class="ntf_heading">
            <h5>Notification</h5>
            <Link to={`/user-setting`} href="javascript:;"><i className="fas fa-cog"></i></Link>
          </div>
          { notifications.map((item,index) => {
            return( <li>
              <img src={ userImg } width='35px' alt={`user-s-${ index }` } />
              <span>{item?.title}</span>
            </li>)
          })}       
          <li><Link to='/notification'>See more</Link></li> 
        </ul>
      </div>
    </li>
  </>
  )
}

export default withRouter(NotificationDropDown)
