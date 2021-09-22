import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axiosInstance from '../../axiosInstance';
import logoImg from 'assets/images/logo.png'
import { toast } from 'react-toastify';

import { getCompleteStep } from 'components/utils/helpers'
// import Login from '../login/login';
// import axios from 'axios'



const UpdateUser = (props) => {
    const [ values,setValues] = useState({'can_contact_you': false})
    useEffect(() => {
      window.openUpdateModal()
    },[])
    const handleChange = (event) =>{
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    } 

    const handleRadio = (event) => {
      setValues({
        ...values,
        [event.target.name]: event.target.checked
      })
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        axiosInstance.put('/users',values).then((response) =>{   
          getCompleteStep(response.headers)

          //localStorage.setItem('user',JSON.stringify(response.data))
          props.history.push('/parents-info')
          }).catch((error) => {
            toast.error(error?.response?.data?.errors)
          })
       
      }
      return(
      <>
        <section class="form_section login_form">
            <div class="form_header">
              <div class="container">
                <a class="form_logo" href="#">
                  <img src={logoImg} className="img-fluid" alt=""  />
                </a>
              </div>
            </div>
          <div class="container">
            <div class="login-reg-panel">
                <div class="login-info-box" style={{ display: 'block !important'}}><br/><br/><br/>
                  <h1>OTP Verifyed</h1>
                  <p></p>
                  <div class="logreg_form">
                  </div>
                </div>
                <div class="register-info-box" style={{display: 'none'}}>
                  <h2>Don't have an account?</h2>
                  <p>Lorem ipsum dolor sit amet</p>
                  <div class="logreg_form">
                    <label id="label-login" for="log-login-show">Register</label>
                    <input type="radio" name="active-log-panel" id="log-login-show" />
                  </div>
                 </div>
                 <div class="white-panel user_info_form right-log">
                    <div class="login-show">
                    <h2>Update User profile</h2>
                    <form onSubmit={(event) => handleSubmit(event)} >
                            <div class="form-group">
                              <input type="text" name='name' placeHolder='Profile Name' onChange={handleChange} class="form-control" required />
                            </div>
                             <div class="form-group">
                             <select onChange={handleChange} name='your_relation' class="operator form-control user_relation" required >
                              <option value selected={true } disabled={ true } >Your Relation</option>
                              {
                                  ["myself", "father", "mother", "brother", "sister", "cousine", "relative", "friend", "other"].map((item,index)=> 
                                    <option key={ index } value={ item } >{ item }</option>
                                  )
                              }
                              </select>
                            </div>

                            { values.your_relation === 'other' && 
                              <div class="form-group">
                                <input type="text" name='other_relation' placeholder='Other Relation' onChange={handleChange} class="form-control" required />
                              </div>
                            }
                              
                            <div class="form-group switch_btn">
                              <h6>Can Contact You</h6>
                              <label class="switch">
                                <input type="checkbox" name='can_contact_you' onChange={ handleRadio } required />
                                <span class="slider round"></span>
                              </label>

                              </div>
                              <button type="submit" class="btn log_reg_btn">Update</button>
                            </form>
                        </div>
                      </div>
                    </div>
                 </div>
           </section>
         </>
        );
    };

export default withRouter(UpdateUser)

