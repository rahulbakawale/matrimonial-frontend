import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosInstance from '../../axiosInstance';

const ResetPassword = (props) => {
  const [ values,setValues] = useState({})
  const handleChange = (event) =>{
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  const resendPassword = (e) => {
    e.preventDefault()
    axiosInstance.post('/auth/forgot',values).then(async(response) =>{
      }).catch((error) => {
      toast.error(error?.response?.data?.errors[0])
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axiosInstance.post('/auth/reset',values).then(async(response) =>{
        // response.data['access-token'] = response.headers['access-token']
        // response.data['uid'] = response.headers['uid']
        // response.data['client'] = response.headers["client"]
        // localStorage.setItem('user',JSON.stringify(response.data))
        window.location.href = '/'
      }).catch((error) => {
      toast.error(error?.response?.data?.errors[0])
    })
  }
  return(
  <div className="modal query_modal modalizer animate__animated animate__fast" id="reset" tabindex="-1" role="dialog" data-animate-in="zoomIn" data-animate-out="zoomOut">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Forgot Password</h5>
            <button type="button" className="close align-self-end closemodal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body mx-0 d-flex flex-column">
            <div className="query_form">
              <form onSubmit={(event) => handleSubmit(event)}>
                <div className="form-group">
                <input type="text" name='mobile' onChange={handleChange} className="form-control" required />
                  <label for="name">Mobile</label>
                </div>
                <div className="form-group">
                  <input type="password" name='password' onChange={handleChange} className="form-control" required />
                  <label for="password">Password</label>
                </div>
                <a href="#" onClick={ resendPassword } >Resend password</a>
                <button type="submit" className="btn query_btn">Submit</button> 
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(ResetPassword)
