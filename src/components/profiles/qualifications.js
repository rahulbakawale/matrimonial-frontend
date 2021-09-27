import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import axiosInstance from '../../axiosInstance';
import logoImg from 'assets/images/logo.png'
import { toast } from 'react-toastify';
import { completeStep } from 'components/utils/helpers';
import { getCompleteStep } from 'components/utils/helpers';
import { Formik } from 'formik'

const QualiFications = (props) => {
  const checkId=  props?.match?.params?.id
  const [ education, setEducation ] = useState({})
  const id = completeStep()?.profile?.id

  useEffect(() => {
    async function onLoad(){  
      const response = await axiosInstance.get(`/profiles/${ id }`,{timeout: 5000}) 
      setEducation(response.data.education)
    }
    onLoad()
  },[])

  const handleSubmit = (values) => { 
    axiosInstance.put(`/profiles/${id}/educations/`,values).then((response) =>{     
    getCompleteStep(response.headers)
    if(checkId){
      props.history.push(`/user-profiles/${checkId}`)
    }else{
      props.history.push('/occupations')
    }
    }).catch((error) =>{
      toast.error(error?.response?.data?.errors[0])
    })
  }
  console.log(QualiFications)
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
            initialValues={ education }
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
            /* and other goodies */
            }) => {
            return(
            <div className="container">
              <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-5 col-12">
                  <div className="edu_profile_left position-relative">
                    <div className="position-relative">
                      <h2>Education Detail</h2>
                      <form onSubmit={ handleSubmit }></form>
                      <i className="fas fa-graduation-cap"></i>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-7 col-12">
                  <div className="user_info_form profile_form edu_profile_form">
                    <h3>Education Detail</h3>
                      <form onSubmit={ handleSubmit }>
                        <div className="form-group">
                          <div class="select2-results__option">
                            <select onChange={handleChange} name='highest_qualification' value={ values. highest_qualification} class="operator form-control" required>
                              <option value selected={true } disabled={ true }> Highest Qualification </option>
                              {
                              ['10th', '12th', 'graduation', 'post-graduation', 'MPhil', 'PhD'].map((item,index)=> 
                              <option key={ index } value={ item } >{ item }</option>
                              )
                              }
                            </select>
                          </div>
                        </div>
                      { (values.highest_qualification === 'graduation' || values.highest_qualification === 'MPhil' || values.highest_qualification === 'PhD' || values.highest_qualification === 'post-graduation') && 
                        <div className="form-group">
                          <select onChange={handleChange} name='graduation' value={ values. graduation} class="operator form-control" required>
                            <option value selected={true } disabled={ true }>Graduation </option>
                            {
                            ["BE","BCA","BSC","B.com"].map((item,index)=> 
                            <option key={ index } value={ item } >{ item }</option>
                            )
                            }
                          </select>
                        <div className="form-group">
                          <select onChange={handleChange} name='graduation_stream'  value={ values. graduation_stream} class="operator form-control" required>
                            <option value selected={true } disabled={ true }>Graduation Stream </option>
                            {
                            ["CS","IT", "ECS"].map((item,index)=> 
                            <option key={ index } value={ item } >{ item }</option>
                            )
                            }
                          </select>
                        </div>
                        <div className="form-group">
                            <input type="text" name='graduation_college'  value={ values.graduation_college } onChange={handleChange} classNameName="form-control" required />
                            <label for="mtrprofession">Graduation College</label>
                          </div>
                        </div>
                      }     
                      { ( values.highest_qualification === 'post-graduation' || values.highest_qualification === 'MPhil' || values.highest_qualification === 'PhD' ) &&
                      <div className="form-group">
                          <select onChange={handleChange} name='post_graduation' value={ values.post_graduation } class="operator form-control" required>
                            <option value selected={true } disabled={ true }>Post Graduation </option>
                            {
                            ["MBA","MCA", "MTech"].map((item,index)=> 
                            <option key={ index } value={ item } >{ item }</option>
                            )
                            }
                          </select>
                          <div className="form-group">
                            <input type="text" name='post_graduation_stream' value={values.post_graduation_stream} onChange={handleChange} classNameName="form-control" required />
                            <label for="mtrprofession">Post Graduation Stream</label>
                          </div>
                          <div className="form-group">
                            <input type="text" name='post_graduation_college' value={values.post_graduation_college} onChange={handleChange} classNameName="form-control" required />
                            <label for="mtrprofession">Post Graduation College</label>
                          </div>
                      </div>
                      }
                      <button type="submit" className="btn log_reg_btn">{ checkId ? 'Update' : 'Save'}</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            )}}
        </Formik>
    </section>
  </>   
)
}     

export default withRouter(QualiFications)
