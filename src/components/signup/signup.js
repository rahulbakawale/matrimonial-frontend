import React, { useState } from 'react';
import { withRouter } from "react-router";
import axiosInstance from '../../axiosInstance';
import { getCompleteStep } from 'components/utils/helpers';
import { toast } from 'react-toastify'

const Signup = (props) => {
  const [ values,setValues] = useState({})
  const handleChange = (event) =>{
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault()
      axiosInstance.post('/auth',values).then((response) =>{
        response.data['access-token'] = response.headers['access-token']
        response.data['uid'] = response.headers['uid']
        response.data['client'] = response.headers["client"]
        localStorage.setItem('user',JSON.stringify(response.data))
        getCompleteStep(response.headers)
        window.location.href = '/verifyMobile' 
      }).catch((error) =>{
        toast.error(error?.response?.data?.errors && error?.response?.data?.errors[0])

    })
  }

  return(
  <div style={{display: 'none'}}className="modal query_modal modalizer animate__animated animate__fast" id="regs" tabindex="-1" role="dialog" data-animate-in="zoomIn" data-animate-out="zoomOut">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Signup</h5>
          <button type="button" className="close align-self-end closemodal">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body mx-0 d-flex flex-column">
          <div className="query_form">
            <form onSubmit={(event) => handleSubmit(event)}>
              <div className="form-group">
              <input type="text" name='mobile' onChange={handleChange} className="form-control" required />
                <label for="mobile">Mobile</label>
              </div>
              <div className="form-group">
                <input type="password" name='password' onChange={handleChange} className="form-control" required/>
                <label for="password">Password</label>
              </div>
              <div className="form-group">
                <input type="password" name='password_confirmation' onChange={handleChange} className="form-control" required/>
                <label for="con-password">Confirm Password</label>
              </div>
              <button type="submit" className="btn query_btn">Sign Up</button>
              <span className="login_txt">If you are already Member?
                <a className="nav-link modalinit" href="javascript:;" onClick={() => window.openLoginModal() }>Login</a>
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default withRouter(Signup)
