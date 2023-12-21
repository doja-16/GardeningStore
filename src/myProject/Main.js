import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import { useLocation } from 'react-router-dom'
import './Main.css'
export default function Main() {
  const location = useLocation();
    const { state } = location;
    const username = state?.username;
  
  return (
    <div>
     <Navbar/>
     <Home/>
        <div class="message">
            <h3>Welcome {username}!</h3>
        </div>
     <Footer/>
    </div>
  )
}
