import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import { completeStep } from 'components/utils/helpers';
import axiosInstance from '../../axiosInstance';
import { getCompleteStep } from 'components/utils/helpers';
import { Formik,Field } from 'formik';
import logoImg from 'assets/images/logo.png'
// import TimePicker from 'react-times';
import 'react-times/css/material/default.css';


// import { getCompleteStep, truncateString } from 'components/utils/helpers'


const Profile = (props) => {
   const id = completeStep()?.profile?.id && props?.match?.params?.id
   const [ profile, setProfile ] = useState({})
   const [ values,setValues] = useState({  manglik: false, divorced: false, disable: false})
 

   useEffect(() => {
   getCompleteStep()
   async function onLoad() {
        axiosInstance.get(`/profiles/${id}`,{},{timeout: 5000}).then((response) =>{
            setProfile(response.data)
        }).catch((error) =>{
            toast.error(error?.response?.data?.errors[0])
        })
        }
        id && onLoad()
    },[])
  

   //  const handleChange = (event) =>{
   //    setValues({
   //      ...values,
   //      [event.target.name]: event.target.value,
   //    });
   //  }

   //  const handleRadio = (event) => {
   //    //   debugger
   //      setValues({
   //        ...values,
   //        [event.target.name]: event.target.checked
   //      })
   //    }
   //    const handleRadioChange = (event) => {
   //      setValues({
   //        ...values,
   //        [event.target.name]: event.target.value
   //      })
   //    }

      const createProfile = (values) =>{
        axiosInstance.post(`/profiles`,values).then((response) =>{ 
          const obj = completeStep()
          obj['profile'] = response.data
          localStorage.setItem('completeStep',JSON.stringify(obj))
            props.history.push('/qualifications')
            }).catch((error) =>{
            toast.error(error?.response?.data?.errors[0])
            })
         }

      const updateProfile = (values) => {
        axiosInstance.put(`/profiles/${ id }`,values).then((response) =>{ 
          const obj = completeStep()
          obj['profile'] = response.data
          localStorage.setItem('completeStep',JSON.stringify(obj))
          props.history.push('/user-profiles')
          }).catch((error) =>{
            toast.error(error?.response?.data?.errors[0])
          })
      }
  
      const handleSubmit = (values) => {   
         id ? updateProfile(values) : createProfile(values)
      }

      console.log(profile)   
      return(
      <>
      <section className="form_section">
        <div className="form_header">
          <div className="container">
            <a className="logo" href="#">
            <img src={ logoImg } className="img-fluid" alt=""  />
            </a>            
          </div>
        </div>
        <Formik
          enableReinitialize
          initialValues={ profile }
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
          <div class="row">
            <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 col-12">
              <div class="user_info_form profile_form">
                <h3>Profile Detail</h3>
                <form onSubmit={ handleSubmit }>
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <input type="text" name='name' value={ values.name } onChange={handleChange} classNameName="form-control" required />
                        <label for="mtrprofession">Name</label>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <input type="text" name='place_of_birth' value={ values.place_of_birth } onChange={handleChange} classNameName="form-control" required />
                        <label for="mtrprofession">Place of Birth</label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div class="col-md-6 col-sm-6 col-9">
                      <div class="form-group">
                        <input type="date" name='dob' value={ values.dob } onChange={handleChange} classNameName="form-control" required />
                        <label for="mtrprofession"></label>
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

                  <div className="row">

                  <div className="col-md-6 col-sm-6 col-9">
                      <div class="form-group">
                        <select onChange={handleChange} name='height' value={ values.height } class="operator form-control user_relation" required >
                          <option value selected={true } disabled={ true } >Select Height</option>
                          {
                          ["3'5","3'6","3'7","3'8","3'9","3'10","3'11","4'0","4'1","4'2","4'3","4'4","4'5","4'6","4'7","4'8",,"4'9","4'10","4'11","5'0","5'1","5'2","5'3","5'4","5'5","5'6","5'7","5'8","5'9","6'0","6'1","6'2","6'3","6'4","6'5",].map((item,index)=> 
                          <option key={ index } value={ item } >{ item }</option>
                          )
                          }
                        </select>
                      </div>
                    </div>

                    {/* <div class="col-md-6 col-sm-6 col-9">
                      <div className="form-group">
                        <input type="number" name='height' value={ values.height } onChange={handleChange} classNameName="form-control" required />
                        <label for="mtrprofession">Height</label>
                      </div>
                    </div> */}
                    <div class="col-md-6 col-sm-6 col-9">
                      <div className="form-group">
                        <input type="number" name='weight' value={ values.weight } onChange={handleChange} classNameName="form-control" required />
                        <label for="mtrprofession">Weight</label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-9">
                      <div class="form-group">
                        <select onChange={handleChange} name='caste' value={ values.caste } class="operator form-control user_relation" required >
                          <option value selected={true } disabled={ true } >Your Cast</option>
                          {
                          ["thakur"].map((item,index)=> 
                          <option key={ index } value={ item } >{ item }</option>
                          )
                          }
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-9">
                      <div className="form-group">
                        <input type="text" name='sub_caste'  value={ values.sub_caste } onChange={handleChange} classNameName="form-control" required />
                        <label for="mtrprofession">Sub caste</label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-9">
                      <div className="form-group">
                        <input type="text" name='gotra' value={ values.gotra } onChange={handleChange} classNameName="form-control" required />
                        <label for="mtrprofession">Gotra</label>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-9">
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
                  </div>
                  <div class="row">
                    <div class="col-md-6 col-sm-6 col-9">
                      <div className="form-group">
                        <input type="text" name='nationality' value={ values.nationality } onChange={handleChange} classNameName="form-control" required />
                        <label for="mtrprofession">Nationality</label>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-9">
                      <div className="form-group">
                        {/* <input type="text" name='kundli_url' value={ truncateString(5,values.kundli_url)} onChange={handleChange} classNameName="form-control" required /> */}
                        <input type="text" name='kundli_url' value={values.kundli_url} onChange={handleChange} classNameName="form-control" required />
                        <label for="mtrprofession">kundli Url</label>
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
                        <h6>complexion</h6>
                      </div>
                      <div className="col-md-9 col-sm-9 col-12">
                        <div className="radio_opst">
                          <label>
                            <Field type="radio" name="complexion" value='light' />
                            <span className="rddesign"></span>
                            <span className="text">Light</span>
                          </label>
                          <label>
                            <Field type="radio" name="complexion" value='fair' />
                            <span className="rddesign"></span>
                            <span className="text">Fair</span>
                          </label>
                          <label>
                            <Field type="radio" name="complexion" value='medium' />
                            <span className="rddesign"></span>
                            <span className="text">Medium</span>
                          </label>
                          <label>
                            <Field type="radio" name="complexion" value='olive' />
                            <span className="rddesign"></span>
                            <span className="text">Olive</span>
                          </label>
                          <label>
                            <Field type="radio" name="complexion" value='tan-brown' />
                            <span className="rddesign"></span>
                            <span className="text">Tan Brown</span>
                          </label>
                          <label>
                            <Field type="radio" name="complexion" value='black-brown' />
                            <span className="rddesign"></span>
                            <span className="text">Black Brown</span>
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
                        <h6>Disable</h6>
                        <label className="switch">
                          <Field type="checkbox" name="disable" />
                          <span className="slider round"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  {/* <div class="col-md-6 col-sm-6 col-9">
                    <div className="form-group">
                    <TimePicker
                        theme='material'
                        time={ values.time }
                        onTimeChange={(value) => {
                          const time = `${value.hour}:${value.minute}`
                          setFieldValue('time',time)
                        }}
                      />`
                      <input type="time" name='time' value={ values.time } onChange={handleChange} classNameName="form-control"  />
                      <label for="mtrprofession">Time</label>
                    </div>
                  </div> */}
                 
                  <button type="submit" className="btn log_reg_btn">{ id ? 'Update' : 'Submit'}</button>
                </form>
              </div>
            </div>
          </div>
          )}}
        </Formik>
      </section>
      </>
    )
}

export default withRouter(Profile)