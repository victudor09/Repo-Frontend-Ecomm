import { createContext, useReducer } from 'react'
import axios from 'axios'
import { reducer, ACTIONS } from '../utils/actions-reducer.js'
import { BASE_URL } from '../utils/constants.js'

export const User = createContext()

export function UserContext ({ children }) {
  const token = JSON.parse(localStorage.getItem('token'))
  const initialStateUser = { user: null , token: token ? token : null }

  const [ state, dispatch ] = useReducer(reducer, initialStateUser)

  const createUser = async (createUser) => {
    try {
      const response = await axios.post(`${BASE_URL}/usuario/create`, createUser)
      dispatch({ type: ACTIONS.CREATE_USER, payload: response.data })
    } catch (error) {
      console.error(error)
    }
  }

  const loginUser = async (loginUser) => {
    try {
      const response = await axios.post(`${BASE_URL}/usuario/login`, loginUser)
      dispatch({ type: ACTIONS.LOGIN_USER, payload: response.data })
  
      if (response.data) return localStorage.setItem('token', JSON.stringify(response.data.token))
    } catch (error) {
      console.log(error)
    }
  }

  const logout = async () => {
    try {
      const response = await axios.delete(`${BASE_URL}/usuario/logout`, {
        headers: { authorization: token }
      })

      dispatch({ type: ACTIONS.LOGOUT, payload: response.data })
      
      if (response.data) return localStorage.removeItem('token')
    } catch (error) {
      console.log(error)
    }
  }

/* PARA DESPACHAR DATOS DE USUARIO LOGEADO PRUEBO CON ESTO: */
  const getUser = async (getUser) => {
    try {
      const response = await axios.get(`${BASE_URL}/usuario/getAll`, {headers: {Authorization: `${token}`}}, getUser)
      dispatch({ type: ACTIONS.GET_USER, payload: response.data })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <User.Provider value={{ user: state.user, token: state.token, createUser, loginUser, logout, getUser }}>
      {children}
    </User.Provider>
  )
}
