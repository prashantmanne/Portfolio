import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Stairs from './common/Stairs.jsx'
import ScrolltoTop from './components/ScrolltoTop'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Stairs>
    <ScrolltoTop/>
   
      <App />
      </Stairs>
    </BrowserRouter>
  
  </StrictMode>,
)
