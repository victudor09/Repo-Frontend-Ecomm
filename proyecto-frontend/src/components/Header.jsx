import { useCallback, useContext } from 'react'
import { User } from '../context/UserContext'
import {Link} from 'react-router-dom'
import ButtomLogout from './ButtomLogout'
/* import '../css/header.css' */
import '../App.scss'

function Header ()  {
  const { user } = useContext(User)

  return (
    <nav className='Header'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        {
          user && (
          <li>
            <Link to="/profile">{user.name}</Link>
          </li>)
        }
      </ul>
      <ButtomLogout />
    </nav>
  )
}

export default Header