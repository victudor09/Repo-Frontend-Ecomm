import { createContext, useReducer } from 'react'
import axios from 'axios'
import { reducer, ACTIONS } from '../utils/actions-reducer.js'

export const Product = createContext()

export function ProductContext ({ children }) {
  const initialStateProduct = { products: [] }
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

  const getProduct = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/producto/`, getProduct)
      console.log("Productos obtenidos:", response.data);
      dispatch({ type: ACTIONS.GET_PRODUCT, payload: response.data })
      
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Product.Provider value={{ categorie: state.product, products:state.products, getCategorie, getProduct }}>
      {children}
    </Product.Provider>
  )
}
