import React from 'react'
import { useFormik } from 'formik';
import useUserContext from '../UserContext';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const Contactus = () => {
  const {setLoggedIn } = useUserContext();

  const navigate = useNavigate( );

  //Initialising fromik
  const ContactusForm =useFormik( { 
    initialValues:{
      name:" ",
      email :" ",
      subject:" ",
      message:" "
    },
    onSubmit : async (  values, {resetForm} ) =>{ 
      console.log(values);
      // write code to submit form to server
      const res= await fetch('http://localhost:5000/user/authenticate',{
        method : 'POST',
        body:JSON.stringify(values),
        headers:{
          'Content-Type' :'application/json'
        }
      })

      console.log(res.status);

      if(res.status == 200){
        Swal.fire({
          icon : 'success',
          title : 'WellDone!',
          text : 'Registered Successfully'
        });
        const data = await res.json();
        sessionStorage.setItem('user', JSON.stringify(data));
        setLoggedIn(true);
        resetForm( );

      }
      
        
      
      
    
    },
    
  });
  
  
      
       
  return (
    <>
    

        <section className="vh-100" style={{ backgroundColor:"black" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block" >
                    <img
                      src="/images2/login.png"
                      alt="Contactus form"
                      className="img-fluid"
                       style={{ borderRadius: "2rem 4 3 2rem",backgroundsize:"cover" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={Contactus.handleSubmit}>
                        
                        <h1
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: 1 }}
                        >
                          Contact Us
                        </h1>
                        <div className="form-outline mb-4">
                          <input
                            type="name"
                            className="form-control form-control-lg" name="name" onChange={ContactusForm.handleChange} value={ContactusForm.values.name}
                          />
                          <label className="form-label" htmlFor="form2Example17">
                            Your name
                          </label>
                        
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            className="form-control form-control-lg" name="email" onChange={ContactusForm.handleChange} value={ ContactusForm.values.email}
                          />
                          <label className="form-label" htmlFor="form2Example27">
                            email
                          </label>
    
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="subject"
                            className="form-control form-control-lg" name="subject" onChange={ContactusForm.handleChange} value={ ContactusForm.values.subject}                          />
                          <label className="form-label" htmlFor="form2Example27">
                            Subject
                          </label>
    
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="message"
                            className="form-control form-control-lg" name="message" onChange={ContactusForm.handleChange} value={ ContactusForm.values.message}                          />
                          <label className="form-label" htmlFor="form2Example27">
                            Message
                          </label>
    
                        </div>
                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-dark btn-lg btn-block"
                            type="submit"
                          >
                            Send
                          </button>
                        </div>
                       
                       
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="copyRight">
      <div class="container">
        <div class="socialMedia">
        
          <a href="https://www.facebook.com/" class="sprite facebookIcon">&nbsp;</a>
          <a href="https://twitter.com/" class="sprite twitterIcon">&nbsp;</a>
          <div class="cRights">
          <p class="whiteText latoBold appendBottom4">© 2024 Rentify.CO PVT. LTD.</p>
          <p class="whiteText latoBold">Country<span class="latoBlack"><a class="whiteText" href="https://www.makemytrip.com/">
                India
              </a>
              <a class="whiteText" href="https://www.makemytrip.com/?ccde=US">USA</a>
              <a class="whiteText" href="https://www.makemytrip.com/?ccde=AE">UAE</a></span></p>
        </div>
       
        </div>
        </div>
      </div>
              

      
     
     </>
      )
    
  }
    



export default Contactus;