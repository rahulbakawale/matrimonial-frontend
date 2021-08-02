import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axiosInstance from '../../axiosInstance';
import axios from 'axios'


const UpdateUser = (props) => {
    const [ values,setValues] = useState({})
    const handleChange = (event) =>{
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    }
   
    const handleSubmit = (event) => {
        event.preventDefault()
        debugger
        axiosInstance.put('/users',values).then((response) =>{  
           
            
            //localStorage.setItem('user',JSON.stringify(response.data))
            props.history.push('/home')
          })
      }
      return(
      <div className="login-wrapper">
        <h1>Update User Information</h1>
        <form onSubmit={(event) => handleSubmit(event)} >
          <label>
            <h2>Name</h2>
            <input type="text" name='name' onChange={handleChange} />
          </label>
          <label>
            <h2>Your Relation</h2>
            <select  onChange={handleChange} name='your_relation'>
              {
              ["myself", "father", "mother", "brother", "sister", "cousine", "relative", "friend", "other"].map((item,index)=> 
                <option key={ index } value={ item } >{ item }</option>
              )
              }
            </select>
          </label>
          <label>
            <h2>Other Relation</h2>
            <input type="text" name='other_relation' onChange={handleChange}/>
          </label>
          <label>
            <h2>Can Contact You</h2>
            <input type="text" name='can_contact_you' onChange={handleChange}/>
          </label>
          <div>
          <button type="submit">Update</button>
          </div>
        </form>
        </div>
    );
};
export default withRouter(UpdateUser)