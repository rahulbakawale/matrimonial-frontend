import React from 'react';
   import Login from '../login/login';
   import Signup from '../signup/signup';
   import logoImg from 'assets/images/logo.png'
   import bannerImg from 'assets/images/banner.jpg';
   import rosepetalImg from 'assets/images/rose_petal.jpg';
   import aboutImg from 'assets/images/about.jpg';
   import step1 from 'assets/images/step1.png';
   import step2 from 'assets/images/step2.png';
   import step3 from 'assets/images/step3.png';
   import mobileImg from 'assets/images/mobile.png';
   import playStoreImg from 'assets/images/playStore.png';


 const LandingPage = () => {
  return(
      <>
      <nav className="navbar navbar_menu navbar-expand-lg fixed-top" id="sticky">
          <div className="container">
            <a className="logo" href="#">
              <img src={logoImg} className="img-fluid" alt=""  />
            </a>
            <button className="navbar-toggler menu-toggle" type="button" data-toggle="collapse" data-target="#mobile_nav" aria-controls="mobile_nav" aria-expanded="false" aria-label="Toggle navigation">
              <div className="mbmenu-icon"><span></span><span></span><span></span></div>
            </button>
            <div className="collapse navbar-collapse" id="mobile_nav">
              <ul className="navbar-nav menubar ml-auto">
                <li className="menu_link active">
                  <a className="nav-link hvr-grow" href="javascript:;">Home</a>
                </li>
                <li className="menu_link">
                  <a className="nav-link hvr-grow" href="javascript:;">About Us</a>
                </li>
                <li className="menu_link">
                  <a className="nav-link hvr-grow" href="javascript:;">FAQ</a>
                </li>
                <li className="menu_link">
                  <a className="nav-link hvr-grow" href="javascript:;">Contact Us</a>
                </li>
                <li className="menu_link menu_btn">
                  <a className="nav-link modalinit" href="javascript:;" data-toggle="modal" data-modal="login">Login</a>
                </li>
                <li className="menu_link menu_btn">
                  <a className="nav-link modalinit" href="javascript:;" data-toggle="modal" data-modal="regs">Sign Up</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
          <section className="banner">
            <div className="banner-img">
              <img src={bannerImg} className="img-fluid" alt=""  />
            </div>
          </section>

        <div id="ptlfall"></div>
        <section className="animation_bg">
          <div id="ptlfall"></div>
          <div className="bg_rose_petal">
            <img src={rosepetalImg} />
          </div>
          <div className="about-section">
            <div className="about_imgbg"></div>
            <div className="container">
              <div className="heading">
                <h3>About Us</h3>
              </div>
              <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                  <div className="about_img" data-aos="fade-right">
                    <img src={aboutImg} className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                  <div className="about_text" data-aos="fade-left">
                    <p>Dummy text is text that is used in the publishing industry or by web designers
                      to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. </p>
                    <p>Dummy text is text that is used in the publishing industry or by web designers
                      to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="step_section">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                  <div className="step_box" data-aos="zoom-out-right">
                    <h6>01</h6>
                    <h5>Family Information</h5>
                    <p>Dummy text is text that is used in the publishing industry</p>
                    <div className="step_img">
                      <img src={step1} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                  <div className="step_box" data-aos="flip-up">
                    <h6>02</h6>
                    <h5>Get Matches</h5>
                    <p>Dummy text is text that is used in the publishing industry</p>
                    <div className="step_img">
                      <img src={step2} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                  <div className="step_box" data-aos="zoom-out-left">
                    <h6>03</h6>
                    <h5>Find People</h5>
                    <p>Dummy text is text that is used in the publishing industry</p>
                    <div className="step_img">
                      <img src={step3} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="wcu-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="heading">
                    <h3>Why Us</h3>
                    <h2>Why Choose Us</h2>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="wcu_text">
                    <ul className="list-unstyled">
                      <li data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <i className="fas fa-check-circle"></i>
                        Dummy text is text that is used in the publishing industry
                      </li>
                      <li data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <i className="fas fa-check-circle"></i>
                        Dummy text is text that is used in the publishing industry
                      </li>
                      <li data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <i className="fas fa-check-circle"></i>
                        Dummy text is text that is used in the publishing industry
                      </li>
                      <li data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <i className="fas fa-check-circle"></i>
                        Dummy text is text that is used in the publishing industry
                      </li>
                      <li data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                        <i className="fas fa-check-circle"></i>
                        Dummy text is text that is used in the publishing industry
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mobileApp">
          <div className="container position-relative">
            <div className="mobile_img">
              <img src={mobileImg} className="img-fluid" alt="" />
            </div>
            <div className="mobile_text" data-aos="fade-up">
              <h2>Best App For You</h2>
              <p>Download Now </p>
              <a href="javascript:;">
                <img src={playStoreImg} className="img-fluid" alt="" data-aos="flip-up" />
              </a>
            </div>
          </div>
        </section>

        <section className="query_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                <div className="query_text">
                  <h3>Do You have any Query?</h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-12">
                <div className="query_link">
                  <a href="javascript:;" className="modalinit" data-modal="queryModal">Click Here</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="footer_section">
          <div className="container">
            <ul className="list-inline">
              <li className="list-inline-item foot_menu">
                <a href="javascript:;">Home</a> |
                <a href="javascript:;">About Us</a> |
                <a href="javascript:;">FAQ</a> |
                <a href="javascript:;">Contact Us</a> |
                <a href="javascript:;">Privacy Policy</a>
              </li>
              <li className="list-inline-item copy_right">Copyright <i className="far fa-copyright"></i> <a href="javascript:;">Kliftox Technology Pvt. ltd.</a> </li>
            </ul>
          </div> */}
          <Login />
          <Signup />
        {/* </section> */}
      </>
    );
  };

     
 export default LandingPage