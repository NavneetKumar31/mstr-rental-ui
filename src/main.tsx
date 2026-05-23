import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './mstr-index.css'
import MstrApp from './mstr-App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MstrApp />
  </StrictMode>,
)
