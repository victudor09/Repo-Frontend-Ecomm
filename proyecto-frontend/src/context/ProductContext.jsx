import { createContext, useReducer } from 'react'
import axios from 'axios'
import { reducer, ACTIONS } from '../utils/actions-reducer.js'

export const Product = createContext()

export function ProductContext ({ children }) {
  const initialState = { product: {} }
  const BASE_URL = 'http://localhost:3000'

  const [ state, dispatch ] = useReducer(reducer, initialState)

  const getCategorie = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/categoria/`)
      console.log(`Petición: ${response.data}`)
      dispatch({ type: ACTIONS.LOGIN, payload: response.data })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Product.Provider value={{ categorie: state.product, getCategorie }}>
      {children}
    </Product.Provider>
  )
}
