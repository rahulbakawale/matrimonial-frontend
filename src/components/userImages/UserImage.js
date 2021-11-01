import React,{useState} from "react";
import { withRouter } from "react-router";
import { toast } from 'react-toastify';
import { getCompleteStep } from 'components/utils/helpers';
import { completeStep, toBase64 } from 'components/utils/helpers';
import axiosInstance from '../../axiosInstance';
import logoImg from 'assets/images/logo.png';
import { Formik } from 'formik'

const UserImg = (props) =>{
  const id = completeStep()?.profile?.id
  const [values,setValues] = useState({})
  const [ fileData1 , setFileData1 ] = useState(null)
  const [ fileData2 , setFileData2 ] = useState(null)


  const handleChange = (event) => {
    setValues({
      ...values,
      [event.targer.name] : event.target.values
    });
  }
  const handleSubmit = async() => {
    const formData = new FormData();
    const image = fileData1 && await toBase64(fileData1)
    const imageData = image &&  image.split(',')[1]
    const image1 = fileData2 && await toBase64(fileData2)
    const imageData1 = image1 && image1.split(',')[1]
    formData.append('image', imageData);
    formData.append('image1', imageData1);
    
    axiosInstance.post(`/profiles/${id}/attachments`,formData).then(async(response)=>{
      await getCompleteStep(response.headers)
      props.history.push('/partner-preference')
    }).catch((error) =>{
      toast.error(error?.response?.data?.errors && error?.response?.data?.errors[0])
    })
  }

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
        initialValues={UserImg}
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
               <h2 class="form_heading add-img"> Add User Image</h2>
                <form onSubmit={(event) => handleSubmit(event)}>
                  <div class="form-group img_upld_file img2">
                    <input type="file" id="file" 
                    onChange={ (event) => setFileData1(event.target.files[ 0 ]) } />
                    <label for="file" class="btn-3">
                    <span>Upload  Image1</span>
                    </label>
                  </div>
                  <div class="form-group img_upld_file img2">
                    <input type="file" id="file1"
                    onChange={ (event) => 
                    
                      setFileData2(event.target.files[ 0 ]) } />
                    <label for="file1" class="btn-3">
                    <span>Upload  Image2</span>
                    </label>
                  </div>
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
  );
    
};

export default withRouter(UserImg);

