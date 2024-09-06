import { useContext, useEffect } from 'react'
import { Product } from '../../context/ProductContext'

export default function Categorie () {
  const { categorie, getCategorie } = useContext(Product)

    useEffect(() => {
        getCategorie()
    }, [])

  return (
      <section className="Categories">
        <h2>Categorías Populares</h2>
        {
            categorie ? categorie.map(categorie => (
                <div key={categorie.id} className="category-item"><p>{categorie.nameCategorie}</p></div>
            )) : <p>No hay categoria</p>
        }
    </section>
  )
}