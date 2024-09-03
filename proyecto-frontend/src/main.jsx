import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './layout/Layout.jsx'
import './layout.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout>
    </Layout>
  </StrictMode>,
)
