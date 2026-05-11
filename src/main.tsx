import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '././styles/index.css'
import './styles/dark.css'
import App from './Page/App.tsx'
import { ThemeProvider } from './context/ThemeContext.js';
import './assets/configuration/i18n'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)