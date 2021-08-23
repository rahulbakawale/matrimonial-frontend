import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

import axiosInstance from '../../axiosInstance';

import logoImg from 'assets/images/logo.png'

 



const OccupaTions = (props) => {
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
        debugger
        axiosInstance.put(`/occupations/${id}`,values).then((response) =>{ 
          props.history.push('/documents')
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
            <h2 class="form_heading">Occupation Info</h2>
            <form onSubmit={(event) =>    handleSubmit(event)}>
                <div class="form-group">
                    <input type="text" name='company' onChange={handleChange} classNameName="form-control" required />
                    <label for="mtrprofession">Company</label>
                </div>
                <div class="form-group">
                    <input type="text" name='city' onChange={handleChange} classNameName="form-control" required />
                    <label for="mtrprofession">City</label>
                </div>
                <div class="form-group">
                    <input type="text" name='state' onChange={handleChange} classNameName="form-control" required />
                    <label for="mtrprofession">State</label>
                </div>
                <div class="form-group">
                    <input type="number" name='salary' onChange={handleChange} classNameName="form-control" required />
                    <label for="mtrprofession">Salary</label>
                </div>
                <div class="form-group">
                <select onChange={handleChange} name='designation' class="operator form-control" required>
                                <option value selected={true } disabled={ true }>Designation </option>
                                {
                                ["1-2","2-3","3-2","5-4"].map((item,index)=> 
                                <option key={ index } value={ item } >{ item }</option>
                                )
                                }
                 </select>
                </div>
                <div class="form-group">
                <select onChange={handleChange} name='employed_in' class="operator form-control" required>
                                <option value selected={true } disabled={ true }>Employed </option>
                                {
                                ["Government/Public Sector", "Civil Services", "Defence", "Business/ Self Employed", "Not Working", "Administration", "Advertising,  Media & Entertainment", "Agricultural", "Airline & Aviation", "Architecture", "Armed Forces", "Banking & Finance", "BPO & Customer Service", "Corporate Management Professionals", "Doctor", "Education & Training", "Engineering", "Hospitality", "Law Enforcement", "Legal", "Merchant Navy", "Medical & HealthCare", "Science & Research", "Software & IT", "Top Management", "Others"].map((item,index)=> 
                                <option key={ index } value={ item } >{ item }</option>
                                )
                                }
                 </select>
                </div>
                  <div class="form-group switch_btn">
                    <h6>located Abroad</h6>
                    <label class="switch">
                    <input type="checkbox" name='located_abroad' onChange={ handleRadio } required />
                    <span class="slider round"></span>
                    </label>
                    </div>
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
export default withRouter(OccupaTions)
