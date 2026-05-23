import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './mru-index.css'
import MruApp from './mru-App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MruApp />
  </StrictMode>,
)
