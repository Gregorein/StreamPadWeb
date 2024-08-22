import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'
import { CssVarsProvider } from '@mui/joy'

import "normalize-css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssVarsProvider defaultMode="dark">
      <App />
    </CssVarsProvider>
  </StrictMode>,
)
