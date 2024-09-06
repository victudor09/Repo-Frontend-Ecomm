import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './layout/Layout.jsx'
import './layout.css'
import App from './App.jsx'
import Home from './components/Home.jsx'
import Register from './components/Register.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App />

  </StrictMode>,
)
