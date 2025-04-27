import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DollarRain from '../src/components/DollarRain.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DollarRain />
    <App />
  </StrictMode>,
)
