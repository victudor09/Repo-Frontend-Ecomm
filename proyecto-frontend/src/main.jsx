import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LoginContext } from './context/LoginContext.jsx'
import { ProductContext } from './context/ProductContext.jsx'
import Layout from './layout/Layout.jsx'
import './layout.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginContext>
      <ProductContext>
        <Layout>
        </Layout>
      </ProductContext>
    </LoginContext>
  </StrictMode>,
)
