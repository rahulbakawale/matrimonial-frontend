import React, { useState } from 'react';
import { withRouter } from "react-router";
import axios from 'axios';
import './signup.css';
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
        axios({ 
          url: 'https://wedded-raghu.herokuapp.com/api/v1/auth',
          method:'post',
          data: values,
          headers : {
            'Access-Control-Expose-Headers': 'Access-Token, Uid, Client'
          }
          }).then((response) =>{  
          response.data['access-token'] = response.headers['access-token']
          response.data['uid'] = response.headers['uid']
          response.data['client'] = response.headers["client"]

            
            localStorage.setItem('user',JSON.stringify(response.data))
            props.history.push('/verifyMobile')
        }).catch((error) =>{
        })

    }

    return(
        <div className="signup-wrapper">
          <form onSubmit={(event) => handleSubmit(event)} >
          <h1>Please SignUp</h1>
            <label>
              <h2>Email</h2>
              <input type="text" name='mobile' onChange={handleChange} />
            </label>
            <label>
              <h2>Password</h2>
              <input type="password" name='password' onChange={handleChange}/>
            </label>
            <label>
              <h2>Password  Conformation</h2>
              <input type="password" name='password_confirmation' onChange={handleChange}/>
            </label>
            <div>
            <button type="submit">Submit</button>
            {/* <button type="Submit" className="submit" onClick={handleChange}>Logout</button> */}

            </div>
          </form>
          </div>
        )
      }


  export default withRouter(Signup)

