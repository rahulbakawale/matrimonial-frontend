import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getCompleteStep } from 'components/utils/helpers';
import { completeStep } from 'components/utils/helpers';
import axiosInstance from '../../axiosInstance';
//  import logoImg from 'assets/images/logo.png'
 import { Formik } from 'formik';



const DocumentInfo = (props) => {
  const id = completeStep()?.profile?.id && props?.match?.params?.id
  const [ document, setDocument ] = useState({})
  useEffect(() => {
    async function onLoad(){
       const response = await axiosInstance.get(`/profiles/${ id }`,{timeout: 5000}) 
       setDocument(response.data.document)
    }
    onLoad()

  },[])

//   const [ values,setValues] = useState({})

//     const handleChange = (event) =>{
//       setValues({
//         ...values,
//         [event.target.name]: event.target.value,
//       });
//     }
  
      const handleSubmit = (values) => {   
        axiosInstance.put(`profiles/${id}/documents`,values).then((response) =>{ 
          getCompleteStep(response.headers)
          localStorage.setItem('document_ids',JSON.stringify(response.data))
        //   props.history.push('/')
          props.history.push('/user-profiles')
          }).catch((error) =>{
            toast.error(error?.response?.data?.errors[0])
          })
      }
  

      console.log(DocumentInfo)   
      return(
      <>
      <section className="form_section">
          <div className="form_header">
              <div className="container">
                  {/* <a className="logo" href="#">
                  <img src={ logoImg } className="img-fluid" alt=""  />
                  </a>             */}
              </div>
          </div>
          <Formik
              enableReinitialize
              initialValues={document }
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
              <div class="container">
                  <div class="row">
                      <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 col-12">
                          <div class="user_info_form">
                              <h2 class="form_heading">Document  Info</h2>
                              <form onSubmit={(event) =>
                                  handleSubmit(event)}>
                                  <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 col-12">
                                      <div class="form-group">
                                          <select onChange={handleChange} name='id_type' value={ values.id_type } class="operator form-control user_relation" required >
                                              <option value selected={true } disabled={ true } >Your Cast</option>
                                              {
                                              ['AadharCard', 'DrivingLicence', 'Passport', 'VoterId', 'PanCard'].map((item,index)=> 
                                              <option key={ index } value={ item } >{ item }</option>
                                              )
                                              }
                                          </select>
                                      </div>
                                  </div>
                                  { (values.id_type === 'AadharCard' || values.id_type === 'DrivingLicence' || values.id_type === 'VoterId' || values.id_type === 'Passport' || values.id_type === 'PanCard') && 
                                  <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 col-12">
                                      <div class="form-group">
                                          <input type="text" name='id_number' value={ values.id_number } onChange={handleChange} classNameName="form-control" required />
                                          <label for="mtrprofession">Id Number</label>
                                      </div>
                                  </div>
                                  }
                                  <button type="submit" className="btn log_reg_btn">{ id ? 'Update' : 'Submit'}</button>
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


export default withRouter(DocumentInfo)