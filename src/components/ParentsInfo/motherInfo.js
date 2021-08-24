import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosInstance from '../../axiosInstance'
import { getCompleteStep } from 'components/utils/helpers'



const MotherInfo = (props) => {
    const { id } = props
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

    const handleSubmit = (event) => {   
      event.preventDefault()
      axiosInstance.put(`/parents/${ id }`,values).then((response) =>{ 
        getCompleteStep()
        props.history.push('/profiles')
        }).catch((error) =>{
          toast.error(error?.response?.data?.errors[0])
        })
    }
return(
    <form onSubmit={(event) =>
      handleSubmit(event)}>
      <div className="row">
        <div className="col-6 col-md-6 col-sm-6 col-12">
            <div className="form-group">
              <input type="text" name='name' onChange={handleChange} classNameName="form-control" required />
              <label for="mtrname">Mother Name</label>
            </div>
        </div>
        <div className="col-6 col-md-6 col-sm-6 col-12">
            <div className="form-group">
              <input type="text" name='profession' onChange={handleChange} classNameName="form-control" required />
              <label for="mtrprofession">Profession</label>
            </div>
        </div>
      </div>
      <div className="form-group">
        <input type="number" name='contact_number' onChange={handleChange} classNameName="form-control" required />
        <label for="mtrothdtl">Contact Number</label>
      </div>
      <div className="form-group">
        <input type="text" name='extra_details' onChange={handleChange} classNameName="form-control" required />
        <label for="mtrothdtl">Other Details</label>
      </div>
      <div className="row">
        <div className="col-6 col-md-6 col-sm-6 col-12">
            <div className="form-group switch_btn">
              <h6>Contact Person</h6>
              <label class="switch">
              <input type="checkbox" name='contact_person' onChange={ handleRadio } required />
              <span class="slider round"></span>
              </label> 
            </div>
        </div>
        <div className="form-group switch_btn">
            <h6>Passed Away</h6>
            <label class="switch">
            <input type="checkbox" name='passed_away' onChange={ handleRadio } required />
            <span class="slider round"></span>
            </label>
        </div>
      </div>
      <button type="submit" className="btn form_btn">Submit</button>
    </form>
  );
};

export default withRouter(MotherInfo)