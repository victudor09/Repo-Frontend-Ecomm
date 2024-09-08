import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Register from './components/Register'
import Login from './components/Login'
import Profile from './components/Profile'
import Footer from './components/Footer'


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
                    <Route />
                    <Route />
                    <Route />
                    <Route />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App