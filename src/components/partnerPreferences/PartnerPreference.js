import React, { useState} from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Formik,Field } from 'formik';
import axiosInstance from '../../axiosInstance';
import { getCompleteStep, convertToCm, convertToFeet } from 'components/utils/helpers';
import logoImg from 'assets/images/logo.png'

const PartnerPreference = (props) => {
  const [ values,setValues] = useState({manglik: false, divorced: false, located_abroad:false})
  const handleRadioChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    })
  }

  const handleRadio = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.checked
    })
  }

  const handleSubmit = (values) => {   
    //call salary value Rs
    values['min_salary'] = values.min_salary.replace(/,/g,'')
    values['max_salary']= values.max_salary.replace(/,/g,'')
    //pass value for handleSubmit and with help of Formik
    axiosInstance.put('/partner_preferences',values).then((response) =>{  
      const obj = response.data
      obj['to_height'] = convertToFeet(obj.to_height)
      values['to_height'] = convertToCm(values.to_height)
      obj['from_height'] = convertToFeet(obj.from_height)
      values['from_height'] = convertToCm(values.from_height)
    getCompleteStep(response.headers)
    props.history.push('/search-profile')
   }).catch((error) =>{
    toast.error(error?.response?.data?.errors)
  })
}
  console.log(PartnerPreference)    
  return(
   <>
    <section className="form_section">
      <div className="form_header">
        <div className="container">
          <a className="logo" href="#">
            <img src={logoImg} className="img-fluid" alt=""  />
          </a>      
        </div>
      </div>
      <Formik
        enableReinitialize
        initialValues={ {PartnerPreference, to_age: '18',from_age: '18', caste:'Thakur', religion:'Hindu', weight:'40'}}
        validate={values =>
        {
        }}
        onSubmit={(values) => {
        handleSubmit(values)
        }}
        >
        {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting,
        setFieldValue
        /* and other goodies */
        }) => {
        const formValues = values
        return(
        <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 col-12">
          <div class="user_info_form profile_form">
            <h2 class="form_heading">Partner Preference</h2>
            <form onSubmit={ handleSubmit }>
              <div className="row">
                <div className="col-md-6 col-sm-6 col-9">
                  <div class="form-group age_rgp">
                    <label for="to_age">To Age</label>
                    <div class="age_inc_dec">
                      <input type="button" value="-" data-to_age={ values.to_age } onClick={ (event,formValues) => {
                      const to_age = parseInt(event.target.dataset.to_age) - 1
                      if(to_age >= 18){
                      setFieldValue('to_age',to_age)
                      }
                      } } class="decrease" />
                      <input type="number" name='to_age' 
                        min='18'
                        max='50'
                        value={ values.to_age } onChange={handleChange} classNameName="form-control" required />
                      <input type="button" value="+" data-to_age={ values.to_age } onClick={ (event,formValues) => {
                      const to_age = parseInt(event.target.dataset.to_age) + 1
                      if(to_age <= 50 ){
                      setFieldValue('to_age',to_age)
                      } } } class="increase" />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-9">
                  <div class="form-group age_rgp">
                    <label for="from_age">from Age</label>
                    <div class="age_inc_dec">
                      <input type="button" value="-" data-from_age={ values.from_age } onClick={ (event,formValues) => {
                      const from_age = parseInt(event.target.dataset.from_age) - 1
                      if(from_age >= 18){
                      setFieldValue('from_age',from_age)
                      }
                      } } class="decrease" />
                      <input type="number" name='from_age' 
                        min='18'
                        max='50'
                        value={ values.from_age } onChange={handleChange} classNameName="form-control" required />
                      <input type="button" value="+" data-from_age={ values.from_age } onClick={ (event,formValues) => {
                      const from_age = parseInt(event.target.dataset.from_age) + 1
                      if(from_age <= 50 ){
                      setFieldValue('from_age',from_age)
                      } } } class="increase" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
              <div className="col-md-6 col-sm-6 col-9">
                <div class="form-group">
                  <select onChange={handleChange} name='to_height' value={ values.to_height } class="operator form-control user_relation" required >
                    <option value selected={true } disabled={ true } >To Height</option>
                    {
                    //["5","6","7"].map((item,index)=>
                    ["4","4'1","4'2","4'3","4'4","4'5","4'6","4'7","4'8",,"4'9","4'10","4'11","5'0","5'1","5'2","5'3","5'4","5'5","5'6","5'7","5'8","5'9","6'0","6'1","6'2","6'3","6'4","6'5"].map((item,index)=> 
                    <option key={ index } value={ item } >{ item }</option>
                    )
                    }
                  </select>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-9">
                <div class="form-group">
                  <select onChange={handleChange} name='from_height' value={ values.from_height } class="operator form-control user_relation" required >
                    <option value selected={true } disabled={ true } >From Height</option>
                    {
                     ["5","6","7"].map((item,index)=>
                    // ["4ft' 0in","4ft '1in","4ft '2in","4ft '3in","4ft '4in","4ft' 5in","4ft' 6in","4ft '7in","4ft' 8in","4ft '9in","4ft' 10in","4ft' 11in","5ft' 0in","5ft' 1in","5ft' 2in","5ft' 3in","5ft' 4in","5fit' 5in","5fit' 6in","5fit' 7in","5fit' 8in","5fit' 9in","6fit' 0in","6fit' 1in","6fit' 2in","6fit' 3in","6fit' 4in","6fit' 5in",].map((item,index)=> 
                    // ["4'0","1","4'2","4'3","4'4","4'5","4'6","4'7","4'8",,"4'9","4'10","4'11","5'0","5'1","5'2","5'3","5'4","5'5","5'6","5'7","5'8","5'9","6'0","6'1","6'2","6'3","6'4","6'5",].map((item,index)=>  
                    <option key={ index } value={ item } >{ item }</option>
                    )
                    }
                  </select>
                  </div>
                </div>
              </div>
             {/* <div className="row">
                 <div class="col-md-6 col-sm-6 col-9">
                  <div className="form-group">
                    <input type="number" name='min_salary' value={ values.min_salary } onChange={handleChange} classNameName="form-control" required />
                    <label for="mtrprofession">Min Salary</label>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6 col-9">
                  <div className="form-group">
                    <input type="number" name='max_salary' value={ values.max_salary } onChange={handleChange} classNameName="form-control" required />
                    <label for="mtrprofession">Max Salary</label>
                  </div>
                </div>
              </div> */}
              <div className="row">
                <div class="col-md-6 col-sm-6 col-9">
                  <div className="form-group">
                    <input type="text" name='min_salary' value={ values.min_salary } onChange={(event) => {
                        var vl = event.target.value
                        vl = vl.replace(/,/g,'')
                        const val = vl ?  parseInt(vl)?.toLocaleString('hi') : ''
                        setFieldValue('min_salary',val)
                      }} classNameName="form-control" required />
                    <label for="mtrprofession"> Min Salary (Annual in Rupees) </label>
                  </div>
                </div>
                <div class="col-md-6 col-sm-6 col-9">
                  <div className="form-group">
                    <input type="text" name='max_salary' value={ values.max_salary } onChange={(event) => {
                        var vl = event.target.value
                        vl = vl.replace(/,/g,'')
                        const val = vl ?  parseInt(vl)?.toLocaleString('hi') : ''
                        debugger
                        setFieldValue('max_salary',val)
                      }} classNameName="form-control" required />
                    <label for="mtrprofession"> Max Salary (Annual in Rupees) </label>
                  </div>
                </div>
              </div> 
              <div className="row">
                <div class="col-md-6 col-sm-6 col-9">
                  <div className="form-group">
                    <input type="text" name='religion' value={ values.religion } onChange={handleChange} classNameName="form-control" required />
                    <label for="mtrprofession"> Your Religion</label>
                  </div>
                </div>
                  <div class="col-md-6 col-sm-6 col-9">
                    <div className="form-group">
                      <input type="text" name='caste' value={ values.caste } onChange={handleChange} classNameName="form-control" required />
                      <label for="mtrprofession"> Caste</label>
                    </div>
                  </div>
              </div>    
              <div className="row">
                <div className="col-md-6 col-sm-6 col-9">
                  <div className="form-group">
                    <input type="text" name='sub_caste'  value={ values.sub_caste } onChange={handleChange} classNameName="form-control" required />
                    <label for="mtrprofession">Sub caste</label>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-9">
                  <div className="form-group">
                    <input type="number" name='max_siblings' value={ values.max_siblings } onChange={handleChange} classNameName="form-control" required />
                    <label for="mtrprofession">Max Siblings</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6 col-md-6 col-sm-6 col-12">
                  <div class="form-group">
                    <select onChange={handleChange} name='job_preferences' value={ values.job_preferences } class="operator form-control user_relation" required >
                      <option value selected={true } disabled={ true } >Job Preferences</option>
                      {
                      ["Government/Public Sector", "Civil Services", "Defence", "Business/ Self Employed", "Not Working", "Administration", "Advertising,  Media & Entertainment", "Agricultural", "Airline & Aviation", "Architecture", "Armed Forces", "Banking & Finance", "BPO & Customer Service", "Corporate Management Professionals", "Doctor", "Education & Training", "Engineering", "Hospitality", "Law Enforcement", "Legal", "Merchant Navy", "Medical & HealthCare", "Science & Research", "Software & IT", "Top Management", "Others"].map((item,index)=> 
                      <option key={ index } value={ item } >{ item }</option>
                      )
                      }
                    </select>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <input type="text" name='states' value={ values.states } onChange={handleChange} classNameName="form-control" required />
                    <label for="mtrprofession">States</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-md-3 col-sm-3 col-12">
                    <h6>Gender</h6>
                  </div>
                  <div className="col-md-9 col-sm-9 col-12">
                    <div className="radio_opst">
                      <label>
                        <Field type="radio" name="gender" value='male' />
                        <span className="rddesign"></span>
                        <span className="text">Male</span>
                      </label>
                      <label>
                        <Field type="radio" name="gender" value='female' />
                        <span className="rddesign"></span>
                        <span className="text">Female</span>
                      </label>
                    </div>
                  </div>
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
                        <Field type="radio" name="family_status" value='lowest' />
                        <span className="rddesign"></span>
                        <span className="text">Lowest</span>
                      </label>
                      <label>
                        <Field type="radio"   name="family_status"   value='lower-middle' />
                        <span className="rddesign"></span>
                        <span className="text">Lower Middle</span>
                      </label>
                      <label>
                        <Field type="radio"   name="family_status"   value='middle' />
                        <span className="rddesign"></span>
                        <span className="text">Middle</span>
                      </label>
                      <label>
                        <Field type="radio"   name="family_status"   value='uppermiddle' />
                        <span className="rddesign"></span>
                        <span className="text">Upper Middle</span>
                      </label>
                      <label>
                        <Field type="radio"   name="family_status"   value='highest' />
                        <span className="rddesign"></span>
                        <span className="text">Highest</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-sm-12 col-12">
                  <div className="form-group switch_btn">
                    <h6>Manglik</h6>
                    <label className="switch">
                      <Field type="checkbox" name="manglik" />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12 col-12">
                  <div className="form-group switch_btn">
                    <h6>Divorced</h6>
                    <label className="switch">
                      <Field type="checkbox" name="divorced" />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
                <div className="col-md-12 col-sm-12 col-12">
                  <div className="form-group switch_btn">
                    <h6>Located Abroad</h6>
                    <label className="switch">
                      <Field type="checkbox" name='located_abroad'  />
                      <span className="slider round"></span>
                    </label>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn log_reg_btn">Submit</button>
            </form>
          </div>
        </div>
        )}}
      </Formik>
    </section>
    </>
  )
}
export default withRouter(PartnerPreference)

{/* <div className="col-md-6 col-sm-6 col-9">
                  <div class="form-group">
                  <select onChange={handleChange} name='religion' value={ values.religion } class="operator form-control user_relation" required >
                      <option value selected={true } disabled={ true } >Your Religion</option>
                      {
                      ["hindu"].map((item,index)=> 
                      <option key={ index } value={ item } >{ item }</option>
                      )
                      }
                  </select>
                  </div>
              </div> 
                <div className="col-md-6 col-sm-6 col-9">
                  <div class="form-group">
                  <select onChange={handleChange} name='caste' value={ values.caste } class="operator form-control user_relation" required >
                      <option value selected={true } disabled={ true } >Your Caste</option>
                      {
                      ["thakur"].map((item,index)=> 
                      <option key={ index } value={ item } >{ item }</option>
                      )
                      }
                  </select>
                  </div>
              </div> */}