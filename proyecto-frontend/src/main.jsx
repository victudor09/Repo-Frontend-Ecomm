import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LoginContext } from './context/LoginContext.jsx'
import { ProductContext } from './context/ProductContext.jsx'
import './layout.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductContext>
      <LoginContext>
        <App />
      </LoginContext>
    </ProductContext>
  </StrictMode>
)
