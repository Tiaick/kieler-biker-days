import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App.jsx'

/**
 * Build-time render (SSG). Wird von scripts/prerender.mjs für jede Route
 * aufgerufen. Gleiche Baumstruktur wie src/main.jsx, nur mit StaticRouter.
 */
export function render(url) {
  return renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>,
  )
}
