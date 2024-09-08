import {Link} from 'react-router-dom'
/* import '../css/header.css' */
import '../App.scss'
import ButtomLogout from './ButtomLogout'

const Header = () => {
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
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
      <ButtomLogout />
    </nav>
  )
}

export default Header