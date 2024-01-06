import React from 'react'
import './emloyeeacount.scss'
import { MdEmail } from "react-icons/md";
import { BsBuildings } from "react-icons/bs";
import { Link, NavLink } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { useFormik } from 'formik';
import { FaEyeSlash } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import employeeAcountValidation from "./EmployeeAcountValidation"

const EmoloyeeAcount = () => {

    let newPassword = document.querySelector("#newpass")
    let conPassword = document.querySelector("#conpass")

    let initialValues = {
        firstName: "",
        userName: "",
        email:"",
        newpass: "",
        conpass: ""
      }
      
      const formik = useFormik({
        initialValues:initialValues,
        validationSchema : employeeAcountValidation,
        onSubmit: values => {
          console.log(values);
        }
      })


    const handleShowNewPassword =  () =>  {
    if(newPassword.type == "password"){
        newPassword.type = "text"
    }
    else{
        newPassword.type == "text"
        newPassword.type = "password"
    }
    }

    const handleShowConPass = () => {
    if(conPassword.type == "password"){
        conPassword.type = "text"
    }
    else{
        conPassword.type == "text"
        conPassword.type = "password"
    }
    }

  return (
    <div className="employee_acount">
        <div className="container">
            <div className="emoloyee_acount_main">
                <div className="employee_content">
                    <div className="employee_logo">
                    <picture>
                        <img src="/logo.png" alt="Not Pound" />
                    </picture>
                    </div>
                    <h2>Create account.</h2>
                    <h6>Already have account? <NavLink>Log In</NavLink></h6>
                    <div className="from_background">
                        <h3>CREATE ACCOUNT AS A</h3>
                        <div className="employee_candidate_main">
                            <div className="candidate">
                                <Link> <FaRegUser  className='iconEC'/> candidate</Link>
                            </div>
                            <div className="employee">
                                <Link> <BsBuildings className='iconEC'/>employee</Link>
                            </div>
                        </div>
                    </div>
                    <form action="#" method='post' onSubmit={formik.handleSubmit} className='form'>
                       
                        <div className='input_main'>
                        <div>
                         <input type="text" name='firstName' id='firstName' placeholder='Frist Name'onChange={formik.handleChange}
                         value={formik.values.firstName}/>
 
                         {formik.touched.firstName && formik.errors.firstName ? (
                                 <div className='erro'>{formik.errors.firstName}</div>
                         ) : null}
                         </div>
 
                         <div>
                         <input type="text" name='userName' id='userName' placeholder='Username' onChange={formik.handleChange}
                         value={formik.values.userName}/>
                       

                        {formik.touched.userName && formik.errors.userName ? (
                                <div className='erro'>{formik.errors.userName}</div>
                        ) : null}
                         </div>
                        </div>

                       <div>
                       <input type="email" name='email' id='email' placeholder='Email Address'  onChange={formik.handleChange}
                        value={formik.values.email} />
                        {formik.touched.email && formik.errors.email ? (
                                <div className='erro'>{formik.errors.email}</div>
                        ) : null}
                       </div>

                       <div>
                       <input type="password" name='newpass' id='newpass' placeholder='New Password'onChange={formik.handleChange} 
                        value={formik.values.newpass}/>
                        <FaEyeSlash className='click_icon_2' onClick={handleShowConPass}/>

                        {formik.touched.newpass && formik.errors.newpass ? (
                            <div className='erro'>{formik.errors.newpass}</div>
                        ) : null}
                       </div>


                       <div>
                       <input type="password" name='conpass' id='conpass' placeholder='Confirm Password' onChange={formik.handleChange} 
                        value={formik.values.conpass}/>
                            <FaEyeSlash className='click_icon' onClick={handleShowNewPassword}/>
                        {formik.touched.conpass && formik.errors.conpass ? (
                            <div className='erro'>{formik.errors.conpass}</div>
                        ) : null}

                       </div>
                        <button type="submit" id='btnEC'>Create Account <FaArrowRight className='btn_con'/></button>
                    </form>
                    <div className="face_google_loing">
                        <h3>or</h3>
                        <div className="face_google_main">
                        <div>
                           <NavLink to="https://www.facebook.com/" target='_blank'><FaFacebookF className='icon_face'/> Sign up with Facebook</NavLink>
                        </div>
                        <div>
                            <NavLink to="https://www.google.com/" target='_blank'><FcGoogle className='icon_google'/>Sign up with Google</NavLink>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="employee_img">
                    <picture>
                        <img src="employee_img.jpg" alt="Not Pound" />
                        <div className="employee_img_overlay">
                            <h2>Over 1,75,324 candidates waiting for good employees.</h2>
                            <div className="employee_count_main">
                                <div className="employee_count">
                                   <div className="emplo_icon_main">
                                        <MdEmail className="emplo_icon"/>
                                   </div>
                                   <h6>1,75,324</h6>
                                   <p>Live Job</p>
                                </div>
                                <div className="employee_count">
                                   <div className="emplo_icon_main">
                                        <BsBuildings className="emplo_icon"/>
                                   </div>
                                   <h6>97,324</h6>
                                   <p>Companies</p>
                                </div>
                                <div className="employee_count">
                                   <div className="emplo_icon_main">
                                        <MdEmail className="emplo_icon"/>
                                   </div>
                                   <h6>7,532</h6>
                                   <p>New Jobs</p>
                                </div>
                            </div>
                        </div>
                    </picture>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmoloyeeAcount