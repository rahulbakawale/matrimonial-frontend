import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosInstance from '../../axiosInstance'
import { currentUser } from '../utils/helpers'
import './verifyMobile.css';


const VerifyMobile = (props) => {
    const [ values,setValues] = useState({})
    
    
    const handleChange = (event) =>{
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    }

    useEffect(() => {
      async function onLoad() {
        try {
         const response = await axiosInstance.get('/profiles/completed_steps',{},{timeout: 5000})
         //  debugger
         if(response.data.mobile_verified){
            if(!currentUser().name){
              props.history.push('/updateUser')
            }
            props.history.push('/home')   
         }        
        } catch (e) {
          alert(e);
        }
      }
      onLoad()
    },[])
   
    const handleSubmit = (event) => {
        event.preventDefault()
        // debugger
        axiosInstance.put('/mobiles/verify',values).then((resonse) =>{
          if(!currentUser().name){
            props.history.push('/updateUser')
          }else{
            props.history.push('/home')
          }
        }).catch((error) =>{
          // debugger
          toast.error(error?.response?.data?.errors)
        })
    }
    
    const generateOtp = () => { 
      // debugger
        axiosInstance.put('/mobiles/retry',{},{timeout: 5000}).then((resonse) =>{
          toast.success('OTP has sent')
          }).catch((error) =>{
            toast.error(error?.response?.data?.errors)
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

  