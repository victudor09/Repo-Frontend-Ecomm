import React from 'react'
import {Link} from 'react-router-dom'
/* import '../css/home.css' */
import '../App.scss'

const Footer = () => {

    const currentYear = new Date().getFullYear();
  
    return (

    <footer className="Footer">
        
        <p>&copy; {currentYear} eCommerce. Todos los derechos reservados.</p>

        <li>
        <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/login">Login</Link>
        </li>
        <li>
        <Link to="/register">Register</Link>
        </li>
        <li>
        <Link to="/profile">Profile</Link>
        </li>

    </footer>

   
  )
}

export default Footer