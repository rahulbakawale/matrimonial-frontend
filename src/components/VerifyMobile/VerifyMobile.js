import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import axiosInstance from '../../axiosInstance'

import './verifyMobile.css';


const VerifyMobile = (props) => {
    const [ values,setValues] = useState({})
    const handleChange = (event) =>{
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    }
   
    const handleSubmit = (event) => {
        event.preventDefault()
        axiosInstance.put('https://wedded-raghu.herokuapp.com/api/v1/mobiles/verify',values).then((resonse) =>{
            //debugger  
            props.history.push('/home')
        }).catch((error) =>{
        })
    }

    const generateOtp = () => { 
        axiosInstance.put('https://wedded-raghu.herokuapp.com/api/v1/mobiles/retry',{},{timeout: 5000}).then((resonse) =>{
          }).catch((error) =>{
            //debugger
        })
    }

    return(
    <div className="verifymobile-wrapper">
      <h1> Enter OTP</h1>
      <form onSubmit={(event) => handleSubmit(event)} >
        <label>
          <h2>OTP</h2>
          <input type="text" name='otp' onChange={handleChange} />
        </label>
        <div>
        <button type="submit">Submit</button>
        <button type='button' onClick={generateOtp} >Resend</button>
        </div>
      </form>
      </div>
    )
  }
 
  export default withRouter(VerifyMobile)

  