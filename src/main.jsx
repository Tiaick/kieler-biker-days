import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

const container = document.getElementById('root')
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// Hydrieren nur, wenn das vorgerenderte HTML zur aktuellen Route gehört
// (data-prerendered wird von scripts/prerender.mjs gesetzt). Bei unbekannten
// Pfaden liefert der Server die Startseite aus → dann neu rendern statt
// hydrieren, um Hydration-Mismatches zu vermeiden.
const normalize = (p) => (p.length > 1 ? p.replace(/\/+$/, '') : p)
const prerendered = container.dataset.prerendered

if (prerendered && normalize(window.location.pathname) === prerendered) {
  ReactDOM.hydrateRoot(container, app)
} else {
  container.textContent = ''
  ReactDOM.createRoot(container).render(app)
}

// Signal für das Fallback-Skript in index.html (Animationen nicht dauerhaft verstecken)
window.__KBD_APP_STARTED = true
