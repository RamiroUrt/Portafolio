import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/global/style/index.css'
import App from './page/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
