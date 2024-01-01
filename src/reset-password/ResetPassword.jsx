import React, { useState } from 'react'
import './password.scss'
import { FaArrowRight } from "react-icons/fa6";
import { useFormik } from 'formik';
import passvalidation from "./PassValidation"
import { FaEyeSlash } from "react-icons/fa6";


function ResetPassword() {
  const [isActive, setIsActive] = useState(false);

  let newPassword = document.querySelector("#newpass")
  let conPassword = document.querySelector("#conpass")

  let initialValues = {
    newpass: "",
    conpass: ""
  }
  
  const formik = useFormik({
    initialValues:initialValues,
    validationSchema : passvalidation,
    onSubmit: values => {
      console.log(values);
    }
  })

 const handleShowNewPassword =  () =>  {
    if(newPassword.type == "password"){
      newPassword.type = "text"
      // replace("fa-eye-slash", "fa-eye")
    }
    else{
      newPassword.type == "text"
      newPassword.type = "password"
    }
  }

  const handleShowConPass = () => {
    if(conPassword.type == "password"){
      conPassword.type = "text"
      // replace("fa-eye-slash", "fa-eye")
    }
    else{
      conPassword.type == "text"
      conPassword.type = "password"
    }
  }


  return (
    <>
      <div className="reset_password">
        <div className="container">
          <div className="logo">
            <picture>
              <img src="/logo.png" alt="Not Found" />
            </picture>
          </div>
          <div className="from_main">
            <h2>Reset Password</h2>
            <p>Duis luctus interdum metus, ut consectetur ante consectetur sed. Suspendisse euismod viverra massa sit amet mollis.</p>

            <form method='post' onSubmit={formik.handleSubmit}  className='from'>

              <input type="password" name='newpass' id='newpass' placeholder='New Password' onChange={formik.handleChange} 
              value={formik.values.newpass}/>
              <FaEyeSlash  className='click_icon' onClick={handleShowNewPassword}/>

              {formik.touched.newpass && formik.errors.newpass ? (
                <div className='erro'>{formik.errors.newpass}</div>
              ) : null}
              

              <input type="password" name='conpass' id='conpass' placeholder='Confirm Password' onChange={formik.handleChange} 
              value={formik.values.conpass} />
              <FaEyeSlash className='click_icon_2' onClick={handleShowConPass}/>

              {formik.touched.conpass && formik.errors.conpass ? (
                <div className='erro'>{formik.errors.conpass}</div>
              ) : null}

              <button type="submit" id='btn'>Reset Password <FaArrowRight className='btn_con'/></button>
            </form>
          </div>
        </div>
    </div>
    </>
  
  );
}

export default ResetPassword