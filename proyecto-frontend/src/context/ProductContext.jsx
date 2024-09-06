import { createContext, useReducer } from 'react'
import axios from 'axios'
import { reducer, ACTIONS } from '../utils/actions-reducer.js'

export const Product = createContext()

export function ProductContext ({ children }) {
  const initialStateProduct = { product: [] }
  const BASE_URL = 'http://localhost:3000'

  const [ state, dispatch ] = useReducer(reducer, initialStateProduct)

  const getCategorie = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/categoria/`)
      dispatch({ type: ACTIONS.GET_CATEGORIE, payload: response.data })
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
