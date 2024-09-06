import { useContext } from 'react'
import { Product } from '../../context/ProductContext'

export default function Categorie () {
  const { categorie } = useContext(Product)

  return (
    <>
      <h4>{categorie.nameCategorie}</h4>
    </>
  )
}