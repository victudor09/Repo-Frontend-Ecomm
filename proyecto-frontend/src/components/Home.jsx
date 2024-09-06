import { useContext, useEffect } from 'react'
import { Product } from '../context/ProductContext'
import '../css/home.css'

const Home = () => {
    const { categorie, getCategorie } = useContext(Product)

    useEffect(() => {
        getCategorie()
    }, [])
    return (
    <>
    <h4>{categorie.nameCategorie}</h4>

    <section className="Hero">
        <h1>Bienvenido a Nuestro eCommerce</h1>
        <p>Encuentra los mejores productos al mejor precio</p>
        <button>Comprar Ahora</button>
    </section>

    <section className="Categories">
        <h2>Categorías Populares</h2>
        <div className="category-list">
            <div className="category-item">Ropa</div>
            <div className="category-item">Electrónica</div>
            <div className="category-item">Hogar</div>
            <div className="category-item">Deportes</div>
        </div>
    </section>

    <section className="Featured">
        <h2>Productos Destacados</h2>
        <div className="product-list">
            <div className="product-item">
                {/* <img src="" alt="Producto 1"> */}
                <h3>Producto 1</h3>
                <p>$100.00</p>
            </div>
            <div className="product-item">
                {/* <img src="" alt="Producto 2"> */}
                <h3>Producto 2</h3>
                <p>$150.00</p>
            </div>
            <div className="product-item">
                {/* <img src="" alt="Producto 3"> */}
                <h3>Producto 3</h3>
                <p>$200.00</p>
            </div>
        </div>
    </section>

    </>
    )       
}

export default Home