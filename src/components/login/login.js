import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

import axiosInstance from '../../axiosInstance'
import './login.css';
const Login = (props) => {
    const [ values,setValues] = useState({})
    const handleChange = (event) =>{
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    }

    const handleSubmit = (event) => {
      
      event.preventDefault()

      axiosInstance.post('/auth/sign_in',values).then((response) =>{  
          response.data['access-token'] = response.headers['access-token']
          response.data['uid'] = response.headers['uid']
          response.data['client'] = response.headers["client"]
          localStorage.setItem('user',JSON.stringify(response.data))
          window.location.href = '/verifyMobile'
        }).catch((error) => {
          toast.error(error?.response?.data?.errors)
        })
    }
    return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={(event) => handleSubmit(event)} >
        <label>
          <h2>Email</h2>
          <input type="text" name='mobile' onChange={handleChange} />
        </label>
        <label>
          <h2>Password</h2>
          <input type="password" name='password' onChange={handleChange}/>
        </label>
        <div>
        <button type="submit">Submit</button>
        </div>
      </form>
      </div>
    )
  }

  export default withRouter(Login)
