import '../logs.css'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Siginin() {
  const navigate = useNavigate();
  const loginButton = () => { navigate("/") }
  return (
    <div className="doja">
      <div class="signup-box">
        <h1 class="anto">Sign Up</h1>
        <div class="welcome">
          <p class="riha">Welcome back! Login in with</p>
          <button class="do">facebook</button><button class="jo">google</button>
        </div>
        <p class="gol"> or use ur e-mail</p>
        <form>
          <input type="name" placeholder="Enter Name" />
          <br></br><br></br>
          <input type="email" placeholder="Email" />
          <br></br><br></br>
          <input type="password" placeholder="Password" />
          <input type="button" value="Create Account" />
          <a class="fei" onClick={loginButton}>
            Already a member!
            <Link to={'/'}>Log In</Link>
          </a>
        </form>
      </div>

    </div>
  )
}

