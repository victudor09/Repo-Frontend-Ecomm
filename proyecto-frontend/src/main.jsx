import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UserContext } from './context/UserContext.jsx'
import { ProductContext } from './context/ProductContext.jsx'
import './layout.css'
import './App.scss'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProductContext>
      <UserContext>
        <App />
      </UserContext>
    </ProductContext>
  </StrictMode>
)
