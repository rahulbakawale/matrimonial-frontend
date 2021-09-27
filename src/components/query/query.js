import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosInstance from '../../axiosInstance'
// import { getCompleteStep } from 'components/utils/helpers'

const Query = (props) => {
  const [ values,setValues] = useState({})
  const handleChange = (event) =>{
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = (event) => { 
    event.preventDefault()
    axiosInstance.post('/enquiry',values).then(async(response) =>{
      response.data['access-token'] = response.headers['access-token']
      response.data['uid'] = response.headers['uid']
      response.data['client'] = response.headers["client"]
      localStorage.setItem('user',JSON.stringify(response.data))
      //   getCompleteStep(response.headers)
      window.location.href = ('/')
    }).catch((error) => {
      toast.error(error?.response?.data?.errors)
    })
  }

  return(
  <>
    <div className="modal query_modal modalizer animate__animated animate__fast" id="query" tabindex="-1" role="dialog" data-animate-in="flipInY" data-animate-out="flipOutX">
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Query</h5>
            <button type="button" className="close align-self-end closemodal">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body mx-0 d-flex flex-column">
            <div className="query_form">
              <form onSubmit={(event) => handleSubmit(event)}>
                <div className="form-group">
                  <input type="text" name='name' onChange={handleChange} className="form-control" required />
                  <label for="name">Name</label>
                </div>
                <div className="form-group">
                  <input type="text" name='email' onChange={handleChange} className="form-control" required />
                  <label for="name">Email</label>
                </div>
                <div className="form-group">
                  <input type="number" name='mobile' onChange={handleChange} className="form-control" required />
                  <label for="name">Mobile</label>
                </div>
                <div className="form-group">
                  <input type="text" name='city' onChange={handleChange} className="form-control" required />
                  <label for="name">City</label>
                </div>
                <div className="form-group">
                  <textarea type="text" name='message' onChange={handleChange} className="form-control" textarea />
                  <label for="name">Message</label>
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

export default withRouter(Query)
