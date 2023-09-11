import React, { useState } from 'react'
import Styles from "./SignUpForm.module.css";
import EmailIcon from '@mui/icons-material/Email';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import LockIcon from '@mui/icons-material/Lock';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { set } from 'react-hook-form';
import { imageListItemBarClasses } from '@mui/material';




const SignUpForm = () => {
    const [name,setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [showPassword, setShowPassword] =useState(false)
    const [showConfirmPassword, setShowConfirmPassword] =useState(false)

    const [showErrorMessage, setShowErrorMessage] =useState("");
    const [showConfirmPasswordErrorMessage, setShowConfirmPasswordErrorMessage] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        
        var lowerCase = /[a-z]/g;
        var upperCase = /[A-Z]/g;
        var numbers = /[0-9]/g;
        var specialCharacters = /[@#$%&*^]/g;
        if (!password.match(lowerCase)) {
            setShowErrorMessage("Password contains atleast 1 lowercase letter!");
         }else if (password.length < 5) {
            setShowErrorMessage("Password length should be more than 5.");
         }else if (!password.match(upperCase)) {
            setShowErrorMessage("Password contains atleast 1 uppercase letter!");
         } else if (!password.match(numbers)) {
            setShowErrorMessage("Password contains numbers also!");
         } else if (!password.match(specialCharacters)) {
            setShowErrorMessage("Password contains atleast 1 specialCharacter!");
         }else if (password.length > 10) {
            setShowErrorMessage("Password length should not exceed 10.");
         } 
         else {
            setShowErrorMessage(""); 
         }

        if (password != confirmPassword){
            setShowConfirmPasswordErrorMessage("Password doesn't match!");
        }
        else{
            setShowConfirmPasswordErrorMessage(" ")
            alert("Form submitted successfully")
            setEmail("")
            setName("")
            setConfirmPassword("")
            setPassword("")
        }
        
     
    };
  return (
    <>  
    <div className={Styles.bg}>
        <form className={Styles.form} onSubmit={handleSubmit}>
        
            <h3>🔏SignUp🔐</h3>

            <div className={Styles.inputContainer}>
                <AccountBoxIcon className={Styles.icon}/>
                <input type='name' placeholder='Enter name...' 
                value={name}
                onChange={(e)=>setName(e.target.value)}
                required/>
            </div>

            <div className={Styles.inputContainer}>
                <EmailIcon className={Styles.icon}/>
                <input type='email' placeholder='Enter email...'
                value={email}
                onChange={(e)=>setEmail(e.target.value)} 
                required/>
            </div>

            {/*Password*/}
            <div className={Styles.inputAndErrorContainer}>
            <div className={Styles.inputContainer}>
                <LockIcon className={Styles.icon}/>
                <input type={showPassword? "password":"text"} 
                placeholder='Enter password...'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                className={Styles.passwordInput}
                required/>
                {!showPassword?(
                    <VisibilityIcon className={Styles.icon} 
                    onClick = {() => setShowPassword(!showPassword)}/>
                ) : (
                    <VisibilityOffIcon className={Styles.icon}
                    onClick = {() => setShowPassword(!showPassword)}/>
                )
                }
            </div>
            
            <p className={Styles.errorMessage}> {showErrorMessage} </p>
            
            </div>

            {/*confirmPassword*/}
            <div className={Styles.inputAndErrorContainer}>
            <div className={Styles.inputContainer}>
                <LockIcon className={Styles.icon}/>
                <input type={showConfirmPassword? "confirmPassword":"password"} 
                placeholder='Enter confirmPassword...'
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)} 
                className={Styles.passwordInput}
                required/>
                
                {showConfirmPassword?(
                    <VisibilityIcon className={Styles.icon}
                    onClick = {() => setShowConfirmPassword(!showConfirmPassword)}/>
                ) : (
                    <VisibilityOffIcon className={Styles.icon}
                    onClick = {() => setShowConfirmPassword(!showConfirmPassword)}/>
                )
                }
            </div>
            <p className={Styles.errorMessage}> {showConfirmPasswordErrorMessage} </p>
            
            </div>

            <button className={Styles.signUpButton} onClick={'submitted'} type='Submit'>SignUp</button>
        </form>
        </div>
    </>
  )
}

export default SignUpForm
