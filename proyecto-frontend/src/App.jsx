import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Register from './components/Register'
import Login from './components/Login'
import Profile from './components/Profile'


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
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App