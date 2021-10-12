import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';
import axiosInstance from '../../axiosInstance'

const CompleteStep = (props) => {
  const [ values,setValues] = useState({})
  const handleChange = (event) =>{
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  }

  const handleSubmit = (event) => {   
    event.preventDefault()
    axiosInstance.put(`/completed_steps`,values).then((response) =>{ 
      }).catch((error) =>{
      toast.error(error?.response?.data?.errors && error?.response?.data?.errors[0])
    })
  }
  return(
    <h2>test CompleteStep</h2>
  )
}

export default withRouter(CompleteStep)
