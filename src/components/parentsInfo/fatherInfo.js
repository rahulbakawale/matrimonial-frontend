import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosInstance from '../../axiosInstance';
import { getCompleteStep } from 'components/utils/helpers';
import { Formik,Field } from 'formik'

const FatherInfo = (props) => {
  const  idProps  = props?.match?.params?.id
  const { father , setActiveTab } = props
  const id = father.id
  const [ values,setValues] = useState({contact_person: false, father: true, passed_away: false})
   
  const handleSubmit = (values) => {      
    axiosInstance.put(`/parents/${id}`,values).then(async(response) =>{  
      await getCompleteStep(response.headers)
      setActiveTab('mother')
      }).catch((error) =>{
      toast.error(error?.response?.data?.errors && error?.response?.data?.errors[0])
    })
  }
  console.log('FATHER',FatherInfo)   

    // If not using Form formik  so Use @all code    
    // const handleChange = (event) =>{
    //   setValues({
    //     ...values,
    //     [event.target.name]: event.target.value,
    //   });
    // }
    // const handleRadio = (event) => {
    //     setValues({
    //       ...values,
    //       [event.target.name]: event.target.checked
    //     })
    //   }
    //   const handleRadioChange = (event) => {
    //     setValues({
    //       ...values,
    //       [event.target.name]: event.target.value
    //     })
    //   }
  return(
      <>
      <Formik
        enableReinitialize
        initialValues={father}
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
          <div className="row">
            <div className="col-6 col-md-6 col-sm-6 col-12">
              <div class="form-group">
                <input type="text" name='name' value={ values.name } onChange={handleChange} classNameName="form-control" required />
                <label for="mtrprofession">Father Name</label>
              </div>
            </div>
            <div className="col-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <input type="text" name='profession' value={ values.profession } onChange={handleChange} classNameName="form-control" required />
                <label for="mtrprofession">Profession</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <input type="number" name='siblings' value={values.siblings} onChange={handleChange} classNameName="form-control" required />
                <label for="mtrothdtl">Siblings</label>
              </div>
            </div>
            {/* <div className="col-md-6 col-sm-6 col-9">
              <div class="form-group age_rgp">
                <label for="siblings">Siblings</label>
                <div class="age_inc_dec">
                  <input type="button" value="-" data-siblings={ values.siblings } onClick={ (event,formValues) => {
                      const siblings = parseInt(event.target.dataset.siblings) - 1
                    if(siblings >= 0){
                      setFieldValue('siblings',siblings)
                    }
                  } } class="decrease" />
                  <input type="number" name='siblings' 
                    min='0'
                    max='10'
                    value={ values.siblings } onChange={handleChange} classNameName="form-control" required />
                  <input type="button" value="+" data-siblings={ values.siblings } onClick={ (event,formValues) => {
                    const siblings = parseInt(event.target.dataset.siblings) + 1
                    if(siblings <= 10 ){
                      setFieldValue('siblings',siblings)
                    } } } class="increase" />
                </div>
              </div>
            </div>      */}
            <div className="col-6 col-md-6 col-sm-6 col-12">
              <div className="form-group">
                <input type="number" name='contact_number' value={values.contact_number} onChange={(event) => 
                  event.target.value.length <= 10 && handleChange(event)
                } classNameName="form-control"  required />
                <label for="mtrothdtl">Contact Number</label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <input type="text" name='extra_detail'  value={values.extra_detail} onChange={handleChange} classNameName="form-control" required />
            <label for="mtrothdtl">Other Details</label>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-md-3 col-sm-3 col-12">
                <h6>Family Status</h6>
              </div>
              <div className="col-md-9 col-sm-9 col-12">
                <div className="radio_opst">
                  <label>
                    <Field type="radio"  name="family_status" value='lowest'/>
                    <span className="rddesign"></span>
                    <span className="text">Lowest</span>
                  </label>
                  <label>
                    <Field type="radio"   name="family_status" value='lower-middle'/>
                    <span className="rddesign"></span>
                    <span className="text">Lower Middle</span>
                  </label>
                  <label>
                    <Field type="radio"   name="family_status" value='middle' />
                    <span className="rddesign"></span>
                    <span className="text">Middle</span>
                  </label>
                  <label>
                    <Field type="radio"   name="family_status" value='uppermiddle' />
                    <span className="rddesign"></span>
                    <span className="text">Upper Middle</span>
                  </label>
                  <label>
                    <Field type="radio"   name="family_status" value='highest' />
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
                <h6>Contact Person</h6>
                <label className="switch">
                  <Field type="checkbox" name="contact_person" />
                  <span className="slider round"></span>
                  <span class="absolute-no">NO</span>
                </label>
              </div>
            </div>
            <div className="col-md-12 col-sm-12 col-12">
              <div className="form-group switch_btn">
                <h6>Passed Away</h6>
                <label className="switch">
                  <Field type="checkbox" name="passed_away" />
                  <span className="slider round"></span>
                  <span class="absolute-no">NO</span>
                </label>
              </div>
            </div>
          </div>
          <button type="submit" className="btn log_reg_btn">{ idProps ? 'Update' : 'Submit'}</button>
        </form>
        )}}
      </Formik>
    </>
  )
}

export default withRouter(FatherInfo)
