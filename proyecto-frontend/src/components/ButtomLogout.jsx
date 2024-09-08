import { useContext } from 'react'
import { User } from '../context/UserContext'

export default function ButtomLogout () {
  const { logout } = useContext(User)

  const handleButtom = () => {
    logout()
  }

  return (
    <>
      <button type='button' onClick={handleButtom}>Logout</button>
    </>
  )
}