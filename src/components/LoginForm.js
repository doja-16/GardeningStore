// LoginForm.js
import React, { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // Add logic to send login data to the server (e.g., using Axios)
    // Redirect upon successful login, display error otherwise
  };

  return (
    <form onSubmit={handleLogin}>
      <label>Username:</label>
      <input type="text" name="username" onChange={handleInputChange} />

      <label>Password:</label>
      <input type="password" name="password" onChange={handleInputChange} />

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
