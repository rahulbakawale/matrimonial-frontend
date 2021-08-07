import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'assets/css/all.css'
import 'assets/css/animate.min.css'
import 'assets/css/custom_form.css'
import 'assets/css/form-style.css'
import 'assets/css/mdtimepicker.css'
import 'assets/css/modalizer.css'
import 'assets/css/style.css'
import 'assets/css/select2.min.css'
import 'assets/css/style1.css'


export const Main = () => {



  return(<>
      <ToastContainer/>
      <App/>
  </>)
}

ReactDOM.render(
  <React.StrictMode>
   <Main />
  </React.StrictMode>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
