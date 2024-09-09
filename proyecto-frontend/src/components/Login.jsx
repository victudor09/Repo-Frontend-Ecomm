import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { User } from '../context/UserContext'
import '../App.scss'

const Login = () => {
    const { loginUser } = useContext(User)
    const navigate = useNavigate()

    const [data, setData] = useState({
        email: '',
        password: '',
    })

    const initialState = {
        email: '',
        password: '',
    }
    
     const clearState = () => {
        setData({ ...initialState })
    }
    
    const handleInputChange = (event) => {
        setData({ ...data, [event.target.name]:
        event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        loginUser({...data})
        clearState()
        setTimeout(() => {
            navigate('/profile')
        }, 1000)
    }

    return (
    <>
    
    
    <div className='centered-container'>
    <form onSubmit={handleSubmit}>
    <h2> Login </h2>
    <input
        type="email"
        placeholder="email"
        value={data.email}
        onChange={handleInputChange}
        name="email"
    />
    <input
        type="password"
        placeholder="password"
        value={data.password}
        onChange={handleInputChange}
        name="password"
    />
    <button type="submit">Login</button>
    </form>

    </div>
    
    </>
    )
}

export default Login