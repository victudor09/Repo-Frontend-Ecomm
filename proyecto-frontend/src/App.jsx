import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Register from './components/Register'
import Login from './components/Login'
import Profile from './components/Profile'
import Footer from './components/Footer'
import Products from './components/Products'
import Cart from './components/Cart'


function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />}/>
                    {/* <Route path='/user'element={<UserForm />}/> */}
                    <Route path='/register' element={<Register />}/>
                    <Route path='/login' element={<Login />}/>
                    <Route path='/profile' element={<Profile />}/>
                    <Route path='/products' element={<Products />}/>
                    <Route path='/cart' element={<Cart />}/>
                    <Route />
                    <Route />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App