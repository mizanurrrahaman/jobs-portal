
import * as Yup from 'yup';

let passwordFormat =
  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;

const passvalidation = Yup.object({
    newpass : Yup.string()
            .matches( passwordFormat, "Please Enter Eour Password" )
            .min(8, "Must be 8 chracter or higher")
            .max(15, "Must be 15 characters or less")
            .required("Please Enter Eour Password"),

    conpass : Yup.string()
            .matches( passwordFormat, "Your Password Not Mach" )
            .min(8, "Must be 8 chracter or higher")
            .max(15, "Must be 15 characters or less")
            .required("Your Password Not Mach")
})

export default passvalidation