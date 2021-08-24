import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getCompleteStep } from 'components/utils/helpers';
import { completeStep } from 'components/utils/helpers';
import axiosInstance from '../../axiosInstance';
import logoImg from 'assets/images/logo.png'


const DocumentInfo = (props) => {
  const id = completeStep()?.profile?.id
  const [ values,setValues] = useState({})
    const handleChange = (event) =>{
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    }
  
      const handleSubmit = (event) => {   
        event.preventDefault()
        axiosInstance.put(`profiles/${id}/documents`,values).then((response) =>{ 
          getCompleteStep(response.headers)
          localStorage.setItem('document_ids',JSON.stringify(response.data))
          props.history.push('/')
          }).catch((error) =>{
            toast.error(error?.response?.data?.errors[0])
          })
      }
    return(
<>
  <section class="form_section">
    <div class="form_header">
      <div class="container">
      <img src={logoImg} className="img-fluid" alt=""  />
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 col-12">
          <div class="user_info_form">
            <h2 class="form_heading">Document  Info</h2>
            <form onSubmit={(event) => handleSubmit(event)}>
            <div class="form-group">
                <select onChange={handleChange} name='id_type' class="operator form-control" required>
                                <option value selected={true } disabled={ true }>Id Type</option>
                                {
                                ['AadharCard', 'DrivingLicence', 'Passport', 'VoterId', 'PanCard'].map((item,index)=> 
                                <option key={ index } value={ item } >{ item }</option>
                                )
                                }
                 </select>
                </div>
                { (values.id_type === 'AadharCard' || values.id_type === 'DrivingLicence' || values.id_type === 'VoterId' || values.id_type === 'Passport' || values.id_type === 'PanCard') && 

                  <div class="form-group">
                    <input type="text" name='id_number' onChange={handleChange} classNameName="form-control" required />
                    <label for="mtrprofession">Id Number</label>
                  </div>
                }
                <button type="submit" class="btn form_btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  </section>
  </>
 );
};
export default withRouter(DocumentInfo)


