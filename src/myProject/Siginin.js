import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Siginin() {
  const navigate=useNavigate();
  const loginButton=()=>{navigate("/login")}
    return (
      <div>
        <div class="login-box">
      <h1 class="anto">Sign Up</h1>
        <div class="welcome">            
        </div>
      <form>
        <br></br>
        <br></br>
        <br></br>
        <input type="name" placeholder="First Name" />
        <br></br>
        <br></br>
        <input type="name" placeholder="Last Name" />
        <br></br>
        <br></br>
        <input type="email" placeholder="Email" />
        <br></br>
        <br></br>
    
        <input type="password" placeholder="Password" />
        <br></br>
        <br></br>
        <input type="password" placeholder="Confirm Password" />
        <br></br>
        <br></br>
        <input type="button" value="Sign Up" />
      </form>
    </div>
    <a class="qu" onClick={loginButton}>
      Already a member! Log In
    </a>
    
      </div>
    )
  }

