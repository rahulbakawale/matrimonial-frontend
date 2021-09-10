import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
// import logoImg from 'assets/images/logo.png'

import axiosInstance from '../../axiosInstance'

const Sibling = (props) => {
    const [ values,setValues] = useState({})
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
      const handleRadioChange = (event) => {
        setValues({
          ...values,
          [event.target.name]: event.target.value
        })
      }
  
      const handleSubmit = (event) => {   
        event.preventDefault()
        axiosInstance.post('/siblings',values).then((response) =>{   
          props.history.push('/home')
          }).catch((error) =>{
            toast.error(error?.response?.data?.errors[0])
          })
      }
return(
<>
<section class="form_section">
    <div class="form_header">
          {/* <a className="logo" href="#">
                  <img src={ logoImg } className="img-fluid" alt=""  />
               </a>             */}
    </div>
    <div class="container">
        <div class="row">
            <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 col-12">
                <div class="user_info_form">
                    <h2 class="form_heading">Siblings Details</h2>
                    <form onSubmit={(event) =>
                        handleSubmit(event)}>
                        <div className="form-group">
                            <input type="text" name='name' onChange={handleChange} classNameName="form-control" required />
                            <label for="mtrprofession">Name</label>
                        </div>
                        <div className="form-group">
                            <input type="text" name='profession' onChange={handleChange} classNameName="form-control" required />
                            <label for="mtrprofession">Profession</label>
                        </div>
                        <div className="form-group">
                            <input type="number" name='age' onChange={handleChange} classNameName="form-control" required />
                            <label for="mtrothdtl">Age</label>
                        </div>
                        <div class="form-group switch_btn">
                            <h6>Married</h6>
                            <label class="switch">
                            <input type="checkbox" name='married' onChange={ handleRadio } required />
                            <span class="slider round"></span>
                            </label>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-md-3 col-sm-3 col-12">
                                    <h6>Gender</h6>
                                </div>
                                <div className="col-md-9 col-sm-9 col-12">
                                    <div className="radio_opst">
                                        <label>
                                        <input type="radio" onChange={ handleRadioChange } name="gender" value='male'/>
                                        <span className="rddesign"></span>
                                        <span className="text">Male</span>
                                        </label>
                                        <label>
                                        <input type="radio"  onChange={ handleRadioChange } name="gender" value='female'/>
                                        <span className="rddesign"></span>
                                        <span className="text">Female</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn log_reg_btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>
</>
)
}

  export default withRouter(Sibling)