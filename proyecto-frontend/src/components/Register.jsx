import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { User } from '../context/UserContext'
import '../css/register.css'

export const Register = () => {   
    const { createUser } = useContext(User)
    const navigate = useNavigate()

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'user'
    })

    const initialState = {
     name: '',
     email: '',
     password: '',
    }
    
     const clearState = () => {
        setData({ ...initialState })
    }
    
    const handleInputChange = (event) => {
        if (data.name.length + 1 < 3) {
            setMessage('Name must be at least 3 characters')
            setBtnDisabled(true)
            } else {
            setMessage(null)
            setBtnDisabled(false)
            }
        setData({ ...data, [event.target.name]:
        event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        createUser({...data})
        clearState()
        setTimeout(() => {
            navigate('/')
        }, 1000)
    }


    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    return (
    <>
    <h2>Register</h2>
    <form onSubmit={handleSubmit}>
    <input
        type="text"
        placeholder="name"
        value={data.name}
        onChange={handleInputChange}
        name="name"
    />
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
    <button type="submit" disabled={btnDisabled}>Enviar</button>
    <p>{message}</p>
    </form>
    </>
    )
}

export default Register