import React, { useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';
import logoImg from 'assets/images/logo.png';
import { toast } from 'react-toastify';
import { getCompleteStep } from 'components/utils/helpers';
import axiosInstance from '../../axiosInstance';
import _ from 'lodash';
import { Formik,Field } from 'formik';


const UserSetting = (props) => {
  const [ values,setValues] = useState({marked_as_favourite_notification: false, interested_profile_notification: false, view_profile_notification: false})
    // const handleChange = (event) =>{
    //   setValues({
    //     ...values,
    //     [event.target.name]: event.target.value,
    //   });
    // }
    // const handleRadio = (event) => {
    //     setValues({
    //     ...values,
    //     [event.target.name]: event.target.checked
    //   });
    // }
    useEffect(() => {
      axiosInstance.get('/settings').then((response) =>{ 
        const values = { ... response.data }
        const obj = {}
        obj['marked_as_favourite_notification'] = values.marked_as_favourite_notification
        obj['interested_profile_notification'] = values.interested_profile_notification
        obj['view_profile_notification'] = values.view_profile_notification
        obj['image_visibility'] = values.image_visibility
          setValues(obj)
        }).catch((error) =>{
        toast.error(error?.response?.data?.errors && error?.response?.data?.errors[0])
      })
    },[])

      // useEffect(() => {
      //   async function onLoad(){
      //     const response = await axiosInstance.get(`/settings`,{timeout: 5000}) 
      //     setValues(response.data.values)
      //     debugger
      //   }
      //   onLoad()

      // },[])

    const handleSubmit = (values) => {   
      axiosInstance.put('/settings',values).then(async(response) =>{ 
        await getCompleteStep(response.headers)
        props.history.push('/user-profiles')
      }).catch((error) =>{
        toast.error(error?.response?.data?.errors && error?.response?.data?.errors[0])
    });
  }

  return(
    <>
      <section className="form_section">
        <div className="form_header">
          <div className="container">
            <a class="logo" href="#">  
            <img src={logoImg} className="img-fluid" alt=""  />
            </a>
          </div>
        </div>
        <Formik
          enableReinitialize
          initialValues={values}
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
              <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 col-12">
                <div className="user_info_form">
                  <h2 class="form_heading">User Setting</h2>
                  <form onSubmit={(event) =>handleSubmit(event)}>
                    <div className="form-group">
                      <select onChange={handleChange} value={ values.image_visibility } name='image_visibility' className="operator form-control user_relation" required >
                        <option value selected={true } disabled={ true } >Image Visibility</option>
                        {
                        ["all_users", "show_interest_on_your_profile"].map((item,index)=> 
                        <option key={ index } value={ item } >{ item }</option>
                        )
                        }
                      </select>
                    </div>
                    { (values.image_visibility === 'all_users' || values.image_visibility === 'show_interest_on_your_profile') &&
                      <div className="row">
                        <div className="col-md-12 col-sm-12 col-12">
                          <div className="form-group switch_btn">
                            <h6>Interested Profile Notification</h6>
                            <label className="switch">
                              <Field type="checkbox" name='interested_profile_notification' />
                              <span className="slider round"></span>
                              <span class="absolute-no">NO</span>
                            </label>
                          </div>
                        </div>
                      { (values.image_visibility === 'all_users')  && <>
                        <div className="col-md-12 col-sm-12 col-12">
                          <div className="form-group switch_btn">
                            <h6>Marked as favourite notification</h6>
                            <label className="switch">
                              <Field type="checkbox" name='marked_as_favourite_notification' />
                              <span className="slider round"></span>
                              <span class="absolute-no">NO</span>
                            </label>
                          </div>
                        </div>
                        <div className="col-md-12 col-sm-12 col-12">
                          <div className="form-group switch_btn">
                            <h6>View Profile Notification</h6>
                            <label className="switch">
                              <Field type="checkbox" name='view_profile_notification' />
                              <span className="slider round"></span>
                              <span class="absolute-no">NO</span>
                            </label>
                          </div>
                        </div>
                      </>}
                    </div>
                    }     
                    <button type="submit" className="btn log_reg_btn">Submit</button>
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

export default withRouter(UserSetting)
