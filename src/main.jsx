import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Centre from './Centre.jsx'
import Header from './Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <div className='flex'>
    <App />
    <Centre />
    </div>
    
  </StrictMode>,
)
