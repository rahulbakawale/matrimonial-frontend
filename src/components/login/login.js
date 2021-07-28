import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import axios from 'axios'
import './login.css';
const Login = (props) => {
    const [ values,setValues] = useState({})
    const handleChange = (event) =>{
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    }
    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     axios.post('https://wedded-raghu.herokuapp.com/api/v1/auth/sign_in',values).then((resonse) =>{
    //     // debugger  
    //         localStorage.setItem('user',JSON.stringify(resonse.data))
    //         props.history.push('/home')
    //     }).catch((error) =>{
    //     })
    const handleSubmit = (event) => {
      
      event.preventDefault()
      axios({ 
        url: 'https://wedded-raghu.herokuapp.com/api/v1/auth/sign_in',
        method:'post',
        data: values,
        headers : {
          'Access-Control-Expose-Headers': 'Access-Token, Uid, Client'
        }
        }).then((response) =>{  
          debugger   
          response.data['access-token'] = response.headers['access-token']
          response.data['uid'] = response.headers['uid']
          response.data['client'] = response.headers["client"]
          debugger
        localStorage.setItem('user',JSON.stringify(response.data))
        props.history.push('/verifyMobile')
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