import { useContext, useEffect } from 'react'
import { Product } from '../context/ProductContext'

const Products = () => {
  const { products, getProduct } = useContext(Product)

  useEffect(() => {
    getProduct()
}, [])

console.log('Productos en el componente:', products);


  return (
    <section className="Categories">
        <h2>Lista de productos</h2>
        {
            products ? products.map(product => (
              <div key={product.id} className="category-item">
                <h3>{product.name}</h3>
                <p>${product.price}</p>
              </div>
          )) : <p>No hay producto</p>
        }
    </section>
  )
}

export default Products