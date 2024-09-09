import { useContext, useState } from 'react'
import { User } from '../context/UserContext'
import {Link} from 'react-router-dom'
import ButtomLogout from './ButtomLogout'
/* import '../css/header.css' */
import '../App.scss'

function Header ()  {
  const { user, token } = useContext(User)
         
  console.log('Estado de token',token)
  return (
    <nav className='Header'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {
          token ? 
          (
          <>
            <li>
              <Link to="/profile">{user.name || 'Nombre de Usuario'}</Link>
            </li>
            <li>
              <ButtomLogout />
             </li>
          </>) : 
          (<>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>)
        }
      </ul>
    </nav>
  )
}

export default Header