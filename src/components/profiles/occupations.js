import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getCompleteStep } from 'components/utils/helpers';
import { completeStep } from 'components/utils/helpers';
import axiosInstance from '../../axiosInstance';
import logoImg from 'assets/images/logo.png';
import { Formik,Field } from 'formik'


const OccupaTions = (props) => {
  // const id = completeStep()?.profile?.id && props?.match?.params?.id
  const id = completeStep()?.profile?.id 
  const checkId=  props?.match?.params?.id
  const [ occupation, setOccupation ] = useState({})
    useEffect(() => {
      async function onLoad(){
        const response = await axiosInstance.get(`/profiles/${ id }`,{timeout: 5000}) 
        setOccupation(response.data.occupation)
      }
      onLoad()

    },[])

    const handleSubmit = (values) => {  
      values['salary'] = values.salary.replace(/,/g,'')
      // values['salary'] = values.salary && parseInt(values.salary)?.toLocaleString('hi') 

      axiosInstance.put(`profiles/${id}/occupations`,values).then((response) =>{ 
        getCompleteStep(response.headers)
        if(checkId){
          props.history.push(`/user-profiles/${checkId}`)
        }else{
          props.history.push('/documents')
        }
        }).catch((error) =>{
        toast.error(error?.response?.data?.errors[0])
        })
      }
    console.log(OccupaTions)   
    // Use HandleChange & handleRadio if your not using form farmik
    //   const [ values,setValues] = useState({})
    //     const handleChange = (event) =>{
    //       setValues({
    //         ...values,
    //         [event.target.name]: event.target.value,
    //       });
    //     }

    // const handleRadio = (event) => {
    //     setValues({
    //       ...values,
    //       [event.target.name]: event.target.checked
    //     })
    //   }  
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
        initialValues={ occupation }
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
        return(
        <div className="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 col-12">
              <div class="user_info_form profile_form">
                <h2 class="form_heading">Occupation Info</h2>
                <form onSubmit={(event) =>
                  handleSubmit(event)}>
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <input type="text" name='company' value={ values.company } onChange={handleChange} classNameName="form-control" required />
                        <label for="mtrprofession">Company</label>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <input type="text" name='city'  value={ values.city } onChange={handleChange} classNameName="form-control" required />
                        <label for="mtrprofession">City</label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-sm-6 col-9">
                      <div class="form-group">
                        <select onChange={handleChange} name='employed_in' value={ values.employed_in } class="operator form-control user_relation" required >
                          <option value selected={true } disabled={ true } >Employed In</option>
                          {
                          ["Government/Public Sector", "Civil Services", "Defence", "Business/ Self Employed", "Not Working", "Administration", "Advertising,  Media & Entertainment", "Agricultural", "Airline & Aviation", "Architecture", "Armed Forces", "Banking & Finance", "BPO & Customer Service", "Corporate Management Professionals", "Doctor", "Education & Training", "Engineering", "Hospitality", "Law Enforcement", "Legal", "Merchant Navy", "Medical & HealthCare", "Science & Research", "Software & IT", "Top Management", "Others"].map((item,index)=> 
                          <option key={ index } value={ item } >{ item }</option>
                          )
                          }
                        </select>
                      </div>
                    </div>
                    {/* <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <input type="number" name='salary' value={ values.salary } onChange={handleChange} classNameName="form-control" required />
                        <label for="mtrprofession">Salary</label>
                      </div>
                    </div>  */}
                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div class="form-group">
                        <input type="text" name='salary' value={ values.salary } onChange={(event) => {
                          var vl = event.target.value
                          vl = vl.replace(/,/g,'')
                          const val = vl ?  parseInt(vl)?.toLocaleString('hi') : ''
                          setFieldValue('salary',val)
                        }} classNameName="form-control" required />
                         <label for="mtrprofession">Salary (Annual in Rupees) </label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div className="col-md-6 col-sm-6 col-9">
                      <div className="form-group">
                        <input type="text" name='designation'  value={ values.designation } onChange={handleChange} classNameName="form-control" required />
                        <label for="mtrprofession">Designation</label>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group">
                        <input type="text" name='state'  value={ values.state } onChange={handleChange} classNameName="form-control" required />
                        <label for="mtrprofession">State</label>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12 col-9">
                      <div class="form-group">
                        <input type="text" name='nationality' value={ values.nationality } onChange={handleChange} classNameName="form-control" required  />
                        <label for="mtrprofession">Nationality</label>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12 col-sm-12 col-9">
                    <div className="form-group switch_btn">
                      <h6>Located Abroad</h6>
                      <label className="switch">
                        <Field type="checkbox" name="located_abroad" />
                        <span className="slider round"></span>
                      </label>
                    </div>
                  </div>
                  <button type="submit" className="btn log_reg_btn">{ checkId ? 'Update' : 'Submit'}</button>
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

export default withRouter(OccupaTions)