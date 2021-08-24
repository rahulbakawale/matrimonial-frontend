import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosInstance from '../../axiosInstance';
import { completeStep } from 'components/utils/helpers';
import logoImg from 'assets/images/logo.png'
import { getCompleteStep } from 'components/utils/helpers';




const QualiFications = (props) => {
    const [ values,setValues] = useState({})
    const id = completeStep()?.profile?.id
    const handleChange = (event) =>{
        setValues({
            ...values,
            [event.target.name]: event.target.value,
          });
        }
  
     const handleSubmit = (event) => {   
        event.preventDefault()
        axiosInstance.put(`/profiles/${id}/educations/`,values).then((response) =>{ 
        getCompleteStep(response.headers)
        props.history.push('/occupations')
        }).catch((error) =>{
        toast.error(error?.response?.data?.errors[0])
        })
      }
    return(
        <>
        <section className="form_section">
           <div className="form_header">
              <div className="container">
                 <img src={logoImg} className="img-fluid" alt=""  />
              </div>
           </div>
           <div className="container">
              <div className="row">
                 <div className="col-lg-5 col-md-5 col-sm-5 col-12">
                    <div className="edu_profile_left position-relative">
                       <div className="position-relative">
                          <h2>Education Detail</h2>
                          <i className="fas fa-graduation-cap"></i>
                       </div>
                    </div>
                 </div>
                 <div className="col-lg-7 col-md-7 col-sm-7 col-12">
                    <div className="user_info_form profile_form edu_profile_form">
                       <h3>Education Detail</h3>
                       <form onSubmit={(event) =>
                          handleSubmit(event)}>
                          <div class="form-group">
                             <input type="text" name='name' onChange={handleChange} classNameName="form-control" required />
                             <label for="mtrprofession">Name</label>
                          </div>
                          <div className="form-group">
                             <select onChange={handleChange} name='highest_qualification' class="operator form-control" required>
                                <option value selected={true } disabled={ true }> Highest Qualification </option>
                                {
                                ['10th', '12th', 'graduation', 'post-graduation', 'MPhil', 'PhD'].map((item,index)=> 
                                <option key={ index } value={ item } >{ item }</option>
                                )
                                }
                             </select>
                          </div>
                          { (values.highest_qualification === 'graduation' || values.highest_qualification === 'MPhil' || values.highest_qualification === 'PhD') && 
                          <div className="form-group">
                             <select onChange={handleChange} name='graduation' class="operator form-control" required>
                                <option value selected={true } disabled={ true }>Graduation </option>
                                {
                                ["BE","BCA","BSC","B.com"].map((item,index)=> 
                                <option key={ index } value={ item } >{ item }</option>
                                )
                                }
                             </select>
                             <div className="form-group">
                                <select onChange={handleChange} name='graduation_stream' class="operator form-control" required>
                                   <option value selected={true } disabled={ true }>Graduation Stream </option>
                                   {
                                   ["CS","IT", "ECS"].map((item,index)=> 
                                   <option key={ index } value={ item } >{ item }</option>
                                   )
                                   }
                                </select>
                             </div>
                             <div className="form-group">
                                <input type="text" name='graduation_college' onChange={handleChange} classNameName="form-control" required />
                                <label for="mtrprofession">Graduation College</label>
                             </div>
                          </div>
                          }     
                          { ( values.highest_qualification === 'post-graduation' || values.highest_qualification === 'MPhil' || values.highest_qualification === 'PhD' ) &&
                          <div className="form-group">
                             <select onChange={handleChange} name='post_graduation' class="operator form-control" required>
                                <option value selected={true } disabled={ true }>Post Graduation </option>
                                {
                                ["MBA","MCA", "MTech"].map((item,index)=> 
                                <option key={ index } value={ item } >{ item }</option>
                                )
                                }
                             </select>
                             <div className="form-group">
                                <input type="text" name='post_graduation_stream' onChange={handleChange} classNameName="form-control" required />
                                <label for="mtrprofession">Post Graduation Stream</label>
                             </div>
                             <div className="form-group">
                                <input type="text" name='post_graduation_college' onChange={handleChange} classNameName="form-control" required />
                                <label for="mtrprofession">Post Graduation College</label>
                             </div>
                          </div>
                          }
                          <button type="submit" className="save_btn">Save</button>
                       </form>
                    </div>
                 </div>
              </div>
           </div>
        </section>
    </> 
    );
};
export default withRouter(QualiFications)
