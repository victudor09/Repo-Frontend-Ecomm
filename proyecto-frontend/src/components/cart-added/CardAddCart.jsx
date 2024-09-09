import { useState, useEffect } from 'react'

export default function CardAddCart () {
  const storedCart  = JSON.parse(localStorage.getItem('cart'))
  const [ cart, setCart ] = useState()

  useEffect(() => {
    if (storedCart) {
      setCart(storedCart)
    }
  }, [])

  const handleDeleteProduct = (id) => {
    const newCart = cart.filter(item => item.id !== id)
    setCart(newCart)
    localStorage.setItem('cart',  JSON.stringify(newCart))
  }
  
  return (
    <>
      {
        cart?.length > 0 ? cart.map(cart => (
          <section key={cart.id}>
            <h2>{cart.name}</h2>
            <p>{cart.price}</p>
            <button type="button" onClick={() => handleDeleteProduct(cart.id)}>Delete product</button>
          </section>
        ))
        : <p><strong>No tienes productos selecionados</strong></p>
      }
    </>
  )
}