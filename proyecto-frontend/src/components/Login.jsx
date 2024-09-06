import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
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
        console.log(`sending data… ${data.email} ${data.password}`)
        clearState()
        setTimeout(() => {
            navigate('/profile')
        }, 1000)
    }


    const [message, setMessage] = useState('')


    return (
    <>
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
    <input
        type="email"
        placeholder="email"
        value={data.email}
        onChange={handleInputChange}
        name="email"
    />
    <input
        type="text"
        placeholder="password"
        value={data.password}
        onChange={handleInputChange}
        name="name"
    />
    <button type="submit"> Login </button>
    <p>{message}</p>
    </form>
    </>
    )
}

export default Login