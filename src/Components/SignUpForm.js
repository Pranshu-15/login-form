import React, { useState } from 'react';

const SignUpForm = () => {
  // State for form inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // State for input validation
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);

  // Function to handle email input change
  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailValid(emailRegex.test(inputEmail));
  };

  // Function to handle password input change
  const handlePasswordChange = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);

    // Password validation
    setPasswordValid(inputPassword.length >= 8);
  };

  // Function to handle confirm password input change
  const handleConfirmPasswordChange = (e) => {
    const inputConfirmPassword = e.target.value;
    setConfirmPassword(inputConfirmPassword);

    // Confirm password validation
    setConfirmPasswordValid(inputConfirmPassword === password);
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // Check if all inputs are valid
    if (emailValid && passwordValid && confirmPasswordValid) {
      alert('Form submitted successfully');
    } else {
      alert("Can't submit the form. Please check the input values.");
    }
  };

  return (
    <div className='form'>
      <label>Email:</label>
      <input
        type="text"
        value={email}
        onChange={handleEmailChange}
        style={{ borderColor: emailValid ? 'green' : 'red' }}
      />
      {!emailValid && <p style={{ color: 'red' }}>Enter a valid email address</p>}

      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        style={{ borderColor: passwordValid ? 'green' : 'red' }}
      />
      {!passwordValid && <p style={{ color: 'red' }}>Password must be at least 8 characters long</p>}

      <label>Confirm Password:</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        style={{ borderColor: confirmPasswordValid ? 'green' : 'red' }}
      />
      {!confirmPasswordValid && <p style={{ color: 'red' }}>Passwords do not match</p>}

      <button onClick={handleSubmit}>Sign Up</button>
    </div>
  );
};

export default SignUpForm;
