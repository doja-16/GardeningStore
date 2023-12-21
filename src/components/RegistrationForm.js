// RegistrationForm.js
import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();
    // Add logic to send registration data to the server (e.g., using Axios)
    // Redirect upon successful registration
  };

  return (
    <form onSubmit={handleRegistration}>
      <label>Username:</label>
      <input type="text" name="username" onChange={handleInputChange} />

      <label>Password:</label>
      <input type="password" name="password" onChange={handleInputChange} />

      <label>Confirm Password:</label>
      <input
        type="password"
        name="confirmPassword"
        onChange={handleInputChange}
      />

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
