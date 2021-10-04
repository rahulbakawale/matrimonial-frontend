import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import logoImg from 'assets/images/logo.png';
import { getCompleteStep } from 'components/utils/helpers';
import { Formik,Field } from 'formik';
import axiosInstance from '../../axiosInstance';
import _ from 'lodash';
import Select from 'react-select'

const Sibling = (props) => {
  const id = props?.location?.pathname?.match(/\d+/) && props?.location?.pathname?.match(/\d+/)[0]
  const [ sibling, setSibling ] = useState({married: false, age: '18'})
    useEffect(() => { 
      async function getSibling() {
      const result = await axiosInstance.get(`/siblings/${id }`)
      setSibling(result.data)
      }
      id && getSibling()
    },[])
  const handleSubmit = (values) => {
    if(id){
      axiosInstance.put(`/siblings/${ id }`,values).then((response) =>{ 
        getCompleteStep(response.headers)
        props.history.push('/')
        props.history.push(`/user-profiles/{id}`);
      }).catch((error) =>{
        toast.error(error?.response?.data?.errors[0])
      })
    }else{
    axiosInstance.post('/siblings',values).then((response) =>{ 
      if(id){
        props.history.push(`/user-profiles/${id}`)
      }else{
        props.history.push('/user-profiles')
      }
    }).catch((error) =>{
      toast.error(error?.response?.data?.errors[0])
    })
  }      
}
  return(
    <>
      <section class="form_section">
        <div className="form_header">
          <div className="container">
            <a className="logo" href="#">
            <img src={logoImg} className="img-fluid" alt=""  />
            </a>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 col-12">
              <div class="user_info_form">
                <h2 class="form_heading">Siblings Details</h2>
                <Formik
                enableReinitialize
                initialValues={sibling}
                // initialValues={!_.isEmpty(sibling) ? sibling : { age: '18'} }
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
              <form onSubmit={(event) => handleSubmit(event)}>
                <div className="form-group">
                  <input type="text" name='name' value={ values.name } onChange={handleChange} classNameName="form-control" required />
                  <label for="mtrprofession"> Sibling Name</label>
                </div>
                  {/* <div className="col-6 col-md-6 col-sm-6 col-12">
                    <div class="select2-results__option">
                        <Select
                          className="basic-single"
                          classNamePrefix="select-Profession"
                          defaultValue={values.profession}
                          isClearable={false}
                          onChange={(evt) =>{
                            handleChange(evt.value)
                          }}
                          isSearchable={true}
                          name="profession"
                          options={[{label: 'Doctor',value: 'Doctor'},{label: 'Engineer',value: 'Engineer'},{label: 'Advocate',value: 'Advocate'},{label: 'Student',value: 'Student'},{label: 'Banker',value: 'Banker'},{label: 'Other',value: 'Other'},]}
                        />
                    </div>
                  </div> */}
                  <div className="row">
                    <div className="col-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <select onChange={handleChange} name='profession' value={ values.profession } class="operator form-control user_relation" required >
                          <option value selected={true } disabled={ true } >Profession</option>
                          {
                            ["Doctor", "Engineer", "Advocate", "Student", "Banker", "Other"].map((item,index)=> 
                            <option key={ index } value={ item } >{ item }</option>
                            )
                          }
                        </select>
                      </div>
                    </div> 
                    <div className="col-md-6 col-sm-6 col-9">
                      <div class="form-group age_rgp">
                        <label for="age">Age</label>
                          <div class="age_inc_dec">
                            <input type="button" value="-" data-age={ values.age } onClick={ (event,formValues) => {
                            const age = parseInt(event.target.dataset.age) - 1
                            if(age >= 18){
                            setFieldValue('age',age)
                            }
                            } } class="decrease" />
                            <input type="number" name='age' 
                              min='18'
                              max='50'
                              value={ values.age } onChange={handleChange} classNameName="form-control" required />
                            <input type="button" value="+" data-age={ values.age } onClick={ (event,formValues) => {
                            const age = parseInt(event.target.dataset.age) + 1
                            if(age <= 50 ){
                            setFieldValue('age',age)
                            } } } class="increase" />
                          </div>
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
                  <div className="form-group switch_btn">
                    <h6>Married</h6>
                    <label className="switch">
                      <Field type="checkbox" name="married" />
                      <span className="slider round"></span>
                      <span class="absolute-no">NO</span>
                    </label>
                  </div>
                  <button type="submit" className="btn log_reg_btn">{ id ? 'Update' : 'Submit'}</button>
                </form>
                )}}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
    </> 
  )
}

export default withRouter(Sibling)
    