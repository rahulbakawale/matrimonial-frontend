import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axiosInstance from '../../axiosInstance';
import logoImg from 'assets/images/logo.png';
import { toast } from 'react-toastify';
import { getCompleteStep } from 'components/utils/helpers'

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
    axiosInstance.put('/users',values).then(async(response) =>{   
      await getCompleteStep(response.headers)
      //localStorage.setItem('user',JSON.stringify(response.data))
      props.history.push('/parents-info')
      }).catch((error) => {
        toast.error(error?.response?.data?.errors && error?.response?.data?.errors[0])

    }) 
  }
  return(
  <>
    <section className="form_section login_form update-user">
      <div className="form_header">
        <div className="container">
          <a className="form_logo" href="#">
          <img src={logoImg} className="img-fluid" alt=""  />
          </a>
        </div>
      </div>
      <div className="container">
        <div className="login-reg-panel">
          <div className="login-info-box" style={{ display: 'block !important'}}><br/><br/><br/>
          <h1>OTP Verified</h1>
          <div className="logreg_form">
        </div>
      </div>
      <div className="register-info-box" style={{display: 'none'}}>
        <h2>Don't have an account?</h2>
        <p>Lorem ipsum dolor sit amet</p>
        <div className="logreg_form">
          <label id="label-login" for="log-login-show">Register</label>
          <input type="radio" name="active-log-panel" id="log-login-show" />
        </div>
      </div>
      <div className="white-panel user_info_form right-log">
        <div className="login-show">
          <h2>Update User profile</h2>
          <form onSubmit={(event) =>
            handleSubmit(event)} >
            <div className="form-group">
              <input type="text" name='name' placeHolder='Profile Name' onChange={handleChange} className="form-control" required />
            </div>
            <div className="form-group">
              <select onChange={handleChange} name='your_relation' className="operator form-control user_relation" required >
                <option value selected={true } disabled={ true } >Your Relation</option>
                {
                ["myself", "father", "mother", "brother", "sister", "cousine", "relative", "friend", "other"].map((item,index)=> 
                <option key={ index } value={ item } >{ item }</option>
                )
                }
              </select>
            </div>
            { values.your_relation === 'other' && 
              <div className="form-group">
                <input type="text" name='other_relation' placeholder='Other Relation' onChange={handleChange} className="form-control" required />
              </div>
            }
            <div className="form-group switch_btn">
              <h6>Can Contact You</h6>
              <label className="switch">
                <input type="checkbox" name='can_contact_you' onChange={ handleRadio } required />
                <span className="slider update-user-slider round"></span>
                <span className=""></span>
                <span className="absolute-no">NO</span>
              </label>
            </div>
            <button type="submit" className="btn log_reg_btn">Update</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
</>
)
}

export default withRouter(UpdateUser)