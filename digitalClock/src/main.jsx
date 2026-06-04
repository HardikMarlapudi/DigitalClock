import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DigitalClock from './components/DigitalClock'
import './styles/DigitalClock.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DigitalClock />
  </StrictMode>,
)
