import {Link} from 'react-router-dom'
import '../css/header.css'

const Header = () => {
  return (
    <nav className='Header'>
      <div>
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/login">Login</Link>
        </span>
        <span>
          <Link to="/register">Register</Link>
        </span>
        <span>
          <Link to="/profile">Profile</Link>
        </span>
      </div>
    </nav>
  )
}

export default Header