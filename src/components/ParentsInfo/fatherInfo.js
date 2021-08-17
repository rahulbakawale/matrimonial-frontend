import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosInstance from '../../axiosInstance'


const FatherInfo = (props) => {
    const { id , setActiveTab } = props
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
      debugger
      axiosInstance.put(`/parents/${id}`,values).then((response) =>{  
            setActiveTab('mother')
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
                <label for="mtrname">Father Name</label>
              </div>
          </div>
          <div className="col-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <input type="text" name='profession' onChange={handleChange} classNameName="form-control" required />
                <label for="mtrprofession">Profession</label>
              </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <input type="number" name='siblings' onChange={handleChange} classNameName="form-control" required />
                <label for="mtrothdtl">Siblings</label>
              </div>
          </div>
          <div className="col-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <input type="number" name='contact_number' onChange={handleChange} classNameName="form-control" required />
                <label for="mtrothdtl">Contact Number</label>
              </div>
          </div>
        </div>
        <div className="form-group">
          <input type="text" name='extra_detail' onChange={handleChange} classNameName="form-control" required />
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
        <div className="form-group">
          <div className="row">
              <div className="col-md-3 col-sm-3 col-12">
                <h6>Family Status</h6>
              </div>
              <div className="col-md-9 col-sm-9 col-12">
                <div className="radio_opst">
                    <label>
                    <input type="radio" onChange={ handleRadioChange } name="family_status" value='lowest'/>
                    <span className="rddesign"></span>
                    <span className="text">Lowest</span>
                    </label>
                    <label>
                    <input type="radio"  onChange={ handleRadioChange } name="family_status" value='lower-middle'/>
                    <span className="rddesign"></span>
                    <span className="text">Lower Middle</span>
                    </label>
                    <label>
                    <input type="radio"  onChange={ handleRadioChange } name="family_status" value='middle' />
                    <span className="rddesign"></span>
                    <span className="text">Middle</span>
                    </label>
                    <label>
                    <input type="radio"  onChange={ handleRadioChange } name="family_status" value='uppermiddle' />
                    <span className="rddesign"></span>
                    <span className="text">Upper Middle</span>
                    </label>
                    <label>
                    <input type="radio"  onChange={ handleRadioChange } name="family_status" value='highest' />
                    <span className="rddesign"></span>
                    <span className="text">Highest</span>
                    </label>
                </div>
              </div>
          </div>
        </div>
        <button type="submit" className="btn form_btn">Submit</button>
      </form>
  );
};

export default withRouter(FatherInfo)