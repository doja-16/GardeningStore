import '../logs.css'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
export default function Loginform() {
  const navigate = useNavigate();
  const signup = () => { navigate("/signup") }
  const main= () => { navigate("/main") }
  const [username, setUsername] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleLogin = (event) => {
        event.preventDefault();
        
        navigate('/Main', { state: { username } });
    };
  return (
    <div className="doja">
      <div class="login-box">
        <h1 class="anto">Ugaoo</h1>
        <div class="welcome">
          <p class="riha">Welcome back! Login in with</p>
          <button class="do">facebook</button><button class="jo">google</button>
          <br></br><br></br>
        </div>
        <form>
          <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username" /><br></br><br></br>
          <input type="password" placeholder="Password" />
          <p class="riya">Forgot Password?</p>
          <input onClick={handleLogin} type="button" value="Log In" />
          <a class="fei">Not have an account? 
          <Link to={'/signup'}>Sign Up</Link> </a>

        </form>
      </div>
    </div>
  )
}
