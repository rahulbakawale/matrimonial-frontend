import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosInstance from '../../axiosInstance';
import ResetPassword from '../password/resetPassword'

const ForgotPassword = (props) => {
  const [ values,setValues] = useState({})
  const handleChange = (event) =>{
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axiosInstance.post('/auth/forgot',values).then(async(response) =>{
        window.opneResetPasswordModal()
      }).catch((error) => {
      toast.error(error?.response?.data?.errors && error?.response?.data?.errors[0])
    })
  }
  
  return(
  <>
    <div className="modal query_modal modalizer animate__animated animate__fast" id="pwd" tabindex="-1" role="dialog" data-animate-in="zoomIn" data-animate-out="zoomOut">
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
                <button type="submit" className="btn query_btn">send </button> 
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ResetPassword/>
  </>
    
  )
}

export default withRouter(ForgotPassword)
