import * as Yup from 'yup';

let userName = /^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/;
let mailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
let passwordFormat =
  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

const employeeAcountValidation = Yup.object({
    firstName: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .min(4, "Must be 4 chracter or Above")
                .required('Your FirstName'),

    userName: Yup.string()
                .matches( userName, "Please Enter Your User Name" )
                .max(10, "Must be 10 characters or less")
                .min(4, "Must be 4 chracter or higher")
                .required("Please username"),  


    email: Yup.string()
            .matches(mailFormat, "Invalid email address")
            .required('Please enter your email'),

            newpass : Yup.string()
            .matches( passwordFormat, "Please Enter Eour Password" )
            .min(8, "Must be 8 chracter or higher")
            .max(15, "Must be 15 characters or less")
            .required("Please Enter Eour Password"),

    conpass : Yup.string()
            .matches( passwordFormat, "Your Password Not Mach" )
            .min(8, "Must be 8 chracter or higher")
            .max(15, "Must be 15 characters or less")
            .required("Your Password Not Mach"),


})

export default employeeAcountValidation