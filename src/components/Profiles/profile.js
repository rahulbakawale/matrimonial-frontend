import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import { completeStep } from 'components/utils/helpers';
import axiosInstance from '../../axiosInstance'
import { Formik } from 'formik';

const Profile = (props) => {

   const id = completeStep()?.profile?.id
   const [ profile, setProfile ] = useState({})
   const [ values,setValues] = useState({})



   useEffect(() => {
   async function onLoad() {

      axiosInstance.get(`/profiles/${id}`,{},{timeout: 5000}).then((response) =>{
            setProfile(response.data)
         }).catch((error) =>{
            toast.error(error?.response?.data?.errors)
         })
         }
         onLoad()
   },[])
  

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
        axiosInstance.post(`/profiles`,values).then((response) =>{ 
          localStorage.setItem('profile',JSON.stringify(response.data))

        // axiosInstance.put('/profiles/${ id }',values).then((response) =>{   
          props.history.push('/qualifications')
          }).catch((error) =>{
            toast.error(error?.response?.data?.errors[0])
          })
      }

    console.log(profile)
return(
<>
<h2>Profile</h2>

<Formik
       enableReinitialize
       initialValues={ profile }
       validate={values => {
         const errors = {};
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }
         return errors;
       }}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
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
          debugger
          return(
           <form onSubmit={(event) =>
   handleSubmit(event)}>
   <div class="row">
      <div class="col-6">
         <div class="form-group">
            <input type="text" name='name' value={ values.name } onChange={handleChange} classNameName="form-control" required />
            <label for="mtrprofession">Name</label>
         </div>
      </div>
      <div class="col-6">
         <div class="form-group">
            <input type="text" name='place_of_birth' value={ values.place_of_birth } onChange={handleChange} classNameName="form-control" required />
            <label for="mtrprofession">Place of Birth</label>
         </div>
      </div>
   </div>
   <div class="row">
      <div class="col-6">
         <div class="form-group">
            <input type="date" name='dob' value={ values.dob } onChange={handleChange} classNameName="form-control" required />
            <label for="mtrprofession">Date of Birth</label>
         </div>
      </div>
      <div class="col-6">
         <div className="form-group">
            <input type="time" name='time' value={ values.time } onChange={handleChange} classNameName="form-control" required />
            <label for="mtrprofession">Time</label>
         </div>
      </div>
   </div>
   <div class="row">
      <div class="col-6">
         <div className="form-group">
            <input type="number" name='height' value={ values.height } onChange={handleChange} classNameName="form-control" required />
            <label for="mtrprofession">Height</label>
         </div>
      </div>
      <div class="col-6">
         <div className="form-group">
            <input type="number" name='weight' value={ values.weight } onChange={handleChange} classNameName="form-control" required />
            <label for="mtrprofession">Weight</label>
         </div>
      </div>
   </div>
   <div class="row">
      <div class="col-6">
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
      <div class="col-6">
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
      <div class="col-6">
         <div className="form-group">
            <input type="text" name='sub_caste'  value={ values.sub_caste } onChange={handleChange} classNameName="form-control" required />
            <label for="mtrprofession">Sub caste</label>
         </div>
      </div>
   </div>
   <div class="row">
      <div class="col-6">
         <div className="form-group">
            <input type="text" name='gotra' value={ values.gotra } onChange={handleChange} classNameName="form-control" required />
            <label for="mtrprofession">Gotra</label>
         </div>
      </div>
      <div class="col-6">
         <div className="form-group">
            <input type="text" name='nationality' value={ values.nationality } onChange={handleChange} classNameName="form-control" required />
            <label for="mtrprofession">Nationality</label>
         </div>
      </div>
   </div>
   <div class="row">
      <div class="col-6">
         <div className="form-group">
            <input type="text" name='kundli_url' value={ values.kundli_url } onChange={handleChange} classNameName="form-control" required />
            <label for="mtrprofession">kundli Url</label>
         </div>
      </div>
      <div class="col-6">
         <div className="form-group">
            <input type="number" name='age' value={ values.age } onChange={handleChange} classNameName="form-control" required />
            <label for="mtrothdtl">Age</label>
         </div>
      </div>
   </div>
   <div class="row">
      <div class="col-6">
         <div class="form-group switch_btn">
            <h6>Manglik</h6>
            <label class="switch">
            <input type="checkbox" name='manglik' value={ values.manglik } onChange={ handleRadio } required />
            <span class="slider round"></span>
            </label>
         </div>
      </div>
      <div class="col-6">
         <div class="form-group switch_btn">
            <h6>divorced</h6>
            <label class="switch">
            <input type="checkbox" name='divorced' value={ values.divorced } onChange={ handleRadio } required />
            <span class="slider round"></span>
            </label>
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
               <input type="radio" value={ values.gender } onChange={ handleRadioChange } name="gender" value='male'/>
               <span className="rddesign"></span>
               <span className="text">Male</span>
               </label>
               <label>
               <input type="radio"  value={ values.gender } onChange={ handleRadioChange } name="gender" value='female'/>
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
               <input type="radio"  value={ values.light } onChange={ handleRadioChange } name="complexion" value='light'/>
               <span className="rddesign"></span>
               <span className="text">Light</span>
               </label>
               <label>
               <input type="radio"   value={ values.fair } onChange={ handleRadioChange } name="complexion" value='fair'/>
               <span className="rddesign"></span>
               <span className="text">Fair</span>
               </label>
               <label>
               <input type="radio"  value={ values.medium } onChange={ handleRadioChange } name="complexion" value='medium' />
               <span className="rddesign"></span>
               <span className="text">Medium</span>
               </label>
               <label>
               <input type="radio"   value={ values.olive } onChange={ handleRadioChange } name="complexion" value='olive' />
               <span className="rddesign"></span>
               <span className="text">Olive</span>
               </label>
               <label>
               <input type="radio"  value={ values.name } onChange={ handleRadioChange } name="complexion" value='tan-brown' />
               <span className="rddesign"></span>
               <span className="text">Tan Brown</span>
               </label>
               <label>
               <input type="radio"  value={ values.name} onChange={ handleRadioChange } name="complexion" value='black-brown' />
               <span className="rddesign"></span>
               <span className="text">Black Brown</span>
               </label>
            </div>
         </div>
      </div>
   </div>
   <button type="submit" className="btn log_reg_btn">Submit</button>


         </form>
       )}}
     </Formik>
</>
)
}
export default withRouter(Profile)
