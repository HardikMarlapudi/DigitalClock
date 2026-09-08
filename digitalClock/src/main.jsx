import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DigitalClock from './components/DigitalClock'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DigitalClock />
  </StrictMode>,
)
