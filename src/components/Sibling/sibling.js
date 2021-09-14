import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
// import logoImg from 'assets/images/logo.png'
import { Formik,Field } from 'formik';

import axiosInstance from '../../axiosInstance'

const Sibling = (props) => {
    const id = props?.location?.pathname?.match(/\d+/) && props?.location?.pathname?.match(/\d+/)[0]
    const [ sibling, setSibling ] = useState({})

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
                props.history.push('/user-profiles')
            }).catch((error) =>{
                toast.error(error?.response?.data?.errors[0])
            })

        }else{
            axiosInstance.post('/siblings',values).then((response) =>{   
                props.history.push('/user-profiles')
            }).catch((error) =>{
                toast.error(error?.response?.data?.errors[0])
            })
        }     
       
      }
return(
<>
<section class="form_section">
    <div class="form_header">
          {/* <a className="logo" href="#">
                  <img src={ logoImg } className="img-fluid" alt=""  />
               </a>             */}
    </div>
    <div class="container">
        <div class="row">
            <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 col-12">
                <div class="user_info_form">
                    <h2 class="form_heading">Siblings Details</h2>
                    <Formik
              enableReinitialize
              initialValues={ sibling }
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
                    <form onSubmit={(event) =>
                        handleSubmit(event)}>
                        <div className="form-group">
                            <input type="text" name='name' value={ values.name } onChange={handleChange} classNameName="form-control" required />
                            <label for="mtrprofession">Name</label>
                        </div>
                        <div className="form-group">
                            <input type="text" name='profession' value={ values.profession } onChange={handleChange} classNameName="form-control" required />
                            <label for="mtrprofession">Profession</label>
                        </div>
                        <div className="form-group">
                            <input type="number" name='age' value={ values.age } onChange={handleChange} classNameName="form-control" required />
                            <label for="mtrothdtl">Age</label>
                        </div>

                        <div className="form-group switch_btn">
                            <h6>Married</h6>
                            <label className="switch">
                                <Field type="checkbox" name="married" />
                                <span className="slider round"></span>
                            </label>
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
                        <button type="submit" className="btn log_reg_btn">Submit</button>
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