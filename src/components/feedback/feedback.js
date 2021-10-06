import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosInstance from '../../axiosInstance'

const Feedback = (props) => {
  const [ values,setValues] = useState({})
  const handleChange = (event) =>{
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = (event) => { 
    event.preventDefault()
    axiosInstance.post('/feedbacks',values).then(async(response) =>{
      response.data['access-token'] = response.headers['access-token']
      response.data['uid'] = response.headers['uid']
      response.data['client'] = response.headers["client"]
      localStorage.setItem('user',JSON.stringify(response.data))
      window.location.href = ('/')
    }).catch((error) => {
      toast.error(error?.response?.data?.errors && error?.response?.data?.errors[0])
    })
  }

  return(
  <>
    <div className="modal query_modal modalizer animate__animated animate__fast" id="feedback" tabindex="-1" role="dialog" data-animate-in="flipInY" data-animate-out="flipOutX">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Feedback</h5>
            <button type="button" className="close align-self-end closemodal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body mx-0 d-flex flex-column">
            <div className="query_form">
              <form onSubmit={(event) => handleSubmit(event)}>
                <div className="form-group">
                  <input type="text" name='content' onChange={handleChange} className="form-control" required />
                  <label for="name">Content</label>
                </div>   
                <span className="query">
                  <button type="submit" className="btn query_btn">Submit</button>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)
}

export default withRouter(Feedback)
