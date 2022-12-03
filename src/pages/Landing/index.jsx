import React from 'react'
import { useNavigate } from 'react-router-dom'


export const LandingPage = () => {
    const navigate = useNavigate();

    const landingClick = e => {
        e.preventDefault();
        navigate("/register")
      }
    
    
  return (
    <div className="container">
        <button onClick={landingClick}>Registrar-se</button>
    </div>
  )
}
