/* import '../css/home.css' */
import Categorie from './categorie/Categorie'
import '../App.scss'
import { useContext, useEffect } from 'react'
import { Product } from '../context/ProductContext'

const Home = () => {

    const { products, getProduct } = useContext(Product)

    useEffect(() => {
        getProduct()
    }, [])

    return (
    <>

    <section className="Hero">
        <h1>Bienvenido a Nuestro eCommerce</h1>
        <p>Encuentra los mejores productos al mejor precio</p>
        <button>Comprar Ahora</button>
    </section>

    <Categorie />

    <section className="Featured">
        <h2>Productos Destacados</h2>
        <div className="product-list">
            {products && products.length > 0 ? (
                products.slice(0, 3).map((product) => (
                    <div className="product-item" key={product.id}>
                        {/* <img src={product.imageURL} alt={product.name} /> */}
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                    </div>
                ))
            ) : (
                <p>No hay productos disponibles</p>
            )}
        </div>
     </section>
    </>
    )       
}

export default Home