
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Link } from 'react-router-dom';



const Signup = () => {
  const navigate = useNavigate();

  const [selImg, setSelImg] = useState("");

  const signupForm = useFormik({
    initialValues: {
      name: "",
      address: "",
      gender: "",
      phonenumber:" ",
      type:" ",
      password:"",
      email: "",


    },
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      values.avatar = selImg;

      console.log(values);
      setSubmitting(true);

      const res = await fetch("http://localhost:5000/user/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.status);
      setSubmitting(false);

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "WellDone!",
          text: "Registered Successfully 😎",
        });
        navigate("/login");
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong",
        });
      }

      // write code to submit form to server
    },
  });

  const uploadFile = async (e) => {
    if (!e.target.files[0]) return;
    const file = e.target.files[0];
    setSelImg(file.name);
    const fd = new FormData();
    fd.append("myfile", file);

    const res = await fetch("http://localhost:5000/util/uploadfile", {
      method: "POST",
      body: fd,
    });

    console.log(res.status);

    if (res.status === 200) {
      console.log("File uploaded successfully");
    } else {
      console.log("File upload failed");
    }
  };

  return (
    <>
    
    <section className="h-100 bg-dark">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <img
                    src="/images/signup.png"
                    alt="Sample photo"
                    className="img-fluid"
                   
                  />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase">
                      Sign Up
                    </h3>
                    <form onSubmit={signupForm.handleSubmit}>
                   
                    
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              onChange={signupForm.handleChange}
                              value={signupForm.values.name}
                              name="name"
                              className="form-control form-control-lg"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1m"
                            >
                              First name
                            </label>

                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              type="text"
                              onChange={signupForm.handleChange}
                              value={signupForm.values.lastname}
                              name="lastname"
                              id="form3Example1n"
                              className="form-control form-control-lg"
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1n"
                            >
                              Last name
                            </label>
                          
                          </div>
                        </div>
                      </div>
                  
  
        
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          onChange={signupForm.handleChange}
                              value={signupForm.values.address}
                              name="address"
                          id="form3Example8"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Example8">
                          Address
                        </label>
                    
                      </div>
                      <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                        <h6 className="mb-0 me-4">Customer Type: </h6>
                        <div className="form-check form-check-inline mb-0 me-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="Buyer"
                            defaultValue="option1"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="femaleGender"
                          >
                            Buyer
                          </label>
                        </div>
                        <div className="form-check form-check-inline mb-0 me-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="Sellor"
                            defaultValue="option2"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="maleGender"
                          >
                            Sellor
                          </label>
                        </div>
                        <div className="form-check form-check-inline mb-0">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="other"
                            defaultValue="option3"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="otherGender"
                          >
                            Other
                          </label>
                        </div>
                        <div class="row">
              
                
                </div>

                      </div>

                      
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          onChange={signupForm.handleChange}
                              value={signupForm.values.phonenumber}
                              name="phonenumber"
                          id="form3Example9"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Example9">
                          Phone number
                        </label>
                
                      </div>
                     
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          onChange={signupForm.handleChange}
                          value={signupForm.values.email}
                          name="email"
                          id="form3Example97"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Example97">
                          Email ID
                        </label>
                    
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="text"
                          onChange={signupForm.handleChange}
                          value={signupForm.values.password}
                          name="password"
                        
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Example99">
                          password
                        </label>
                      
                      </div>
                      <input type="file" onchange={uploadFile} />
                     <div class="d-flex justify-content-end pt-3">
                     <div className="d-flex justify-content pt-3">
                          <button
                          type="Login"
                          className="btn btn-outline-primary"
                          
                          >
                           <Link to="/Login">Already register/login</Link> 
                           
                          </button>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-warning btn-lg ms-2"
                          disabled={signupForm.isSubmitting}
                        >
                          Submit form
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
  
    
  );


};

export default Signup;