import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosInstance from '../../axiosInstance'
import { currentUser } from '../utils/helpers'
// import logoImg from 'assets/images/logo.png'
// import { getCompleteStep } from 'components/utils/helpers'

const VerifyMobile = (props) => {
    const [ values,setValues] = useState({})
    
    
    const handleChange = (event) =>{
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    }

     useEffect(() => {
   //   async function onLoad() {
   //     try {
   //      const response = await axiosInstance.get('/profiles/completed_steps',{},{timeout: 5000})
   //      if(response.data.mobile_verified){
   //         if(!currentUser().name){
   //           props.history.push('/updateUser')
   //         }
   //         props.history.push('/home')   
   //      }        
   //     } catch (e) {
   //       alert(e);
   //     }
   //   }
   //   onLoad()
   },[])
  
      
   
   
    const handleSubmit = (event) => {
        event.preventDefault()
        axiosInstance.put('/mobiles/verify',values).then((resonse) =>{
          // getCompleteStep(response.headers)
         
          if(!currentUser().name ){
            props.history.push('/updateUser')
          }else{
            props.history.push('/home')
          }
        }).catch((error) =>{
          toast.error(error?.response?.data?.errors)
        })
    }
    
    const generateOtp = () => { 
        axiosInstance.put('/mobiles/retry',{},{timeout: 5000}).then((resonse) =>{
          toast.success('OTP has sent')
          }).catch((error) =>{
            toast.error(error?.response?.data?.errors[0])
          })
    }

    return(
      <>
      <section class="form_section login_form">
         <div class="form_header">
            <div class="container">
               {/* <a class="form_logo" href="#">
               <img src={logoImg} className="img-fluid" alt=""  />
               </a> */}
            </div>
         </div>
         <div class="container">
            <div class="login-reg-panel">
               <div class="login-info-box" style={{ display: 'none'}}>
               <h2>Have an account?</h2>
               <p>Lorem ipsum dolor sit amet</p>
               <div class="logreg_form">
                  <label id="label-register" for="log-reg-show">Login</label>
                  <input type="radio" name="active-log-panel" id="log-reg-show" checked="checked" />
               </div>
            </div>
            <div class="register-info-box">
               <h2>User Profile</h2>
            </div>
            <div class="white-panel user_info_form">
               <div class="login-show">
                  <h2>OTP</h2>
                  <form onSubmit={(event) =>
                     handleSubmit(event)}>
                     <div class="form-group">
                        <input type="text" name='otp' placeolder='Enter OTP' onChange={handleChange} required /> 
                     </div>
                     <button type="submit" className="btn log_reg_btn">Submit</button>
                     <a href="#" onClick={generateOtp} >Resend</a>
                  </form>
               </div>
               <div class="white-panel user_info_form">
                  <div class="register-show">
                     <h2>USER PROFILE</h2>
                  </div>
               </div>
            </div>
         </div>
         </div>
      </section>
      </>
    );
  };
 
  export default withRouter(VerifyMobile)

  