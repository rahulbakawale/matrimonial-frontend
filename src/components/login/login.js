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
    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('https://wedded-raghu.herokuapp.com/api/v1/auth/sign_in',values).then((resonse) =>{
        // debugger  
            localStorage.setItem('user',JSON.stringify(resonse.data))
            props.history.push('/home')
        }).catch((error) =>{
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