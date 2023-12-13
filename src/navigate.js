import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navigate() {
    const navigate=useNavigate();
    const loginButton=()=>{navigate("/login")}
    const signup=()=>{navigate("/signup")}
  return (
    <div>
        <button onClick={loginButton}>Log In</button>
        <button onClick={signup}>Sign Up</button>
    </div>
  )
}