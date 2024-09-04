import { createContext, useReducer } from 'react'
import axios from 'axios'
import { reducer, ACTIONS } from '../utils/actions-reducer.js'

export const Login = createContext()

export function LoginContext ({ children }) {
  const initialState = { user: {} }

  const [ state, dispatch ] = useReducer(reducer, initialState)

  const getUser = () => {
    try {
      const data = axios.get('http://localhost:3000/usuario/create')
      dispatch({ type: ACTIONS.LOGIN, payload: data })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Login.Provider value={{ user: state.user, getUser }}>
      {children}
    </Login.Provider>
  )
}
