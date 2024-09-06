import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LoginContext } from './context/LoginContext.jsx'
import { ProductContext } from './context/ProductContext.jsx'
import Layout from './layout/Layout.jsx'
import Home from './router/Home.jsx'
import './layout.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Register from './components/Register.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App />

  </StrictMode>,
)
