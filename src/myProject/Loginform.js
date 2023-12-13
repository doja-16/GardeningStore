import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Loginform()
  {
    const navigate=useNavigate();
    const signup=()=>{navigate("/signup")}
    return (
      <div>
        <div class="login-box">
      <h1 class="anto">Ugaoo</h1>
        <div class="welcome">
            <p class="riha">Welcome back! Login in with</p>
            <button class ="do">facebook</button><button class="jo">google</button>
            
        </div>
      <form>
        <br></br>
        <input type="email" placeholder="Email" />
        <br></br>
        <br></br>
        <input type="password" placeholder="Password" />
        <p class="riya">Forgot Password?</p>
        <input type="button" value="Log In"  />
        
      </form>
    </div>
    <a class="qu" onClick={signup}>Not have an account? Sign Up
    </a>
      </div>
    )
  }
