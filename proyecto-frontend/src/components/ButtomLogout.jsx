import { useContext } from 'react'
import { User } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

export default function ButtomLogout () {
  const navigate =  useNavigate()
  const { logout } = useContext(User)

  const handleButtom = () => {
    logout()
    navigate('/')
  }

  return (
    <>
      <button type='button' onClick={handleButtom}>Logout</button>
    </>
  )
}