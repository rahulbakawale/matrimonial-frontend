import React, { useEffect, useState } from 'react';
import MotherInfo from './motherInfo';
import FatherInfo  from './fatherInfo';
// import logoImg from 'assets/images/logo.png'
import axiosInstance from '../../axiosInstance'


const ParentsInfo = () =>{
    const [ activeTab, setActiveTab ] = useState('father')
    const [father, setFather ] = useState({})
    const [mother, setMother ] = useState({})

    useEffect(() => {
        async function fetchData() {
            const response =  await axiosInstance.get('/parents')
            const father = response.data.filter((item) => item.father)[0]
            const mother = response.data.filter((item) => item.mother)[0]
            setFather(father)
            setMother(mother)
          }
          fetchData();
       
    },[])
    return(
    <>
     <section className="form_section">
        <div className="form_header">
          <div className="container">
            {/* <a className="logo" href="#">
            <img src={logoImg} className="img-fluid" alt=""  />
            </a> */}
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1 col-sm-12 col-12">
              <div className="user_info_form">
                <h2 className="form_heading">Parents Info</h2>
                 <div className="tile" id="tile-1">
                <ul className="nav nav-tabs nav-justified" role="tablist">
                    <li className="nav-item">
                    <a className={`nav-link ${activeTab ==='father' && 'active'}`} onClick={() => setActiveTab('father') } id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                        Father</a>
                    </li>
                    <li className="nav-item">
                    <a className={`nav-link ${activeTab ==='mother' && 'active'}`} id="profile-tab" onClick={() => {
                        debugger
                    } } data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                        Mother</a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className={`tab-pane fade ${ activeTab === 'father' ? 'show active' : ''}`} id="home" role="tabpanel" aria-labelledby="home-tab">
                        <FatherInfo father={ father } setActiveTab={ setActiveTab } />
                    </div>
                    <div className={`tab-pane fade ${ activeTab === 'mother' ? 'show active' : ''}`} id="profile" role="tabpanel" aria-labelledby="home-tab">
                        <MotherInfo mother={ mother } setActiveTab={ setActiveTab } />
                    </div>
                </div>
            </div>
          </div>
          </div>
        </div>
        </div>
   </section>
    </>

    );
};


 export default ParentsInfo