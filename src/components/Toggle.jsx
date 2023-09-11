import React, { useState } from 'react';
import SignUpForm from './signUpForm/SignUpForm';
import LoginForm from './LoginForm'
import styles from './Toggle.module.css'

const Toggle = () => {
  const [showSignup, setShowSignup] = useState(true);

  const toggleForm = () => {
    setShowSignup(!showSignup);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your signup form submission logic here
    console.log('Signup form submitted!');
  };

  return (
    <div>
      <h2>{showSignup ? <SignUpForm/> : <LoginForm/>}</h2>
      <form onSubmit={handleSubmit}>
        {/* Add your input fields and submit button here */}
        <p className={styles.footer} type="submit">{showSignup ? "Account already exist" : "Don't have an account yet?"}</p>
      </form>
      <p className={styles.Login} onClick={toggleForm}>
        {showSignup ? 'Login an Account' : 'Create an account'}
      </p>
    </div>
  );
};

export default Toggle;