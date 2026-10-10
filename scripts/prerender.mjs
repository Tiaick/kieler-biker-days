// Build-time prerendering (SSG).
// Läuft nach `vite build` (Client → dist/) und `vite build --ssr` (→ dist-ssr/).
// Schreibt für jede Route eine fertige HTML-Datei mit dem gerenderten Markup
// in <div id="root"> und route-spezifischen Head-Tags. Löscht danach dist-ssr/.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')
const SITE = 'https://kieler-bikerdays.de'
const OUTLET = '<div id="root"><!--ssr-outlet--></div>'

// Head-Angaben pro Route. `null` = Werte aus index.html unverändert lassen.
const routes = [
  { url: '/', file: 'index.html', head: null },
  {
    url: '/impressum',
    file: 'impressum/index.html',
    head: {
      title: 'Impressum – Kieler Biker Days 2026',
      description:
        'Impressum der Kieler Biker Days 2026: Anbieterkennzeichnung, Veranstalter BoxZentrum Kiel, Tonberg 15, 24113 Kiel, und Kontaktdaten.',
    },
  },
  {
    url: '/datenschutz',
    file: 'datenschutz/index.html',
    head: {
      title: 'Datenschutz – Kieler Biker Days 2026',
      description:
        'Datenschutzerklärung der Kieler Biker Days 2026: welche Daten wir verarbeiten, Cookies, Google Analytics, Kontaktformular und deine Rechte nach DSGVO.',
    },
  },
]

const escapeAttr = (s) =>
  s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const escapeText = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function replaceOnce(html, regex, replacement, label) {
  if (!regex.test(html)) throw new Error(`prerender: Tag nicht gefunden in index.html: ${label}`)
  return html.replace(regex, replacement)
}

function applyHead(html, url, head) {
  if (!head) return html
  const pageUrl = SITE + url
  const t = escapeText(head.title)
  const ta = escapeAttr(head.title)
  const da = escapeAttr(head.description)
  html = replaceOnce(html, /<title>[\s\S]*?<\/title>/, `<title>${t}</title>`, 'title')
  html = replaceOnce(html, /<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${da}" />`, 'description')
  html = replaceOnce(html, /<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${pageUrl}" />`, 'canonical')
  html = replaceOnce(html, /<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${ta}" />`, 'og:title')
  html = replaceOnce(html, /<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${da}" />`, 'og:description')
  html = replaceOnce(html, /<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${pageUrl}" />`, 'og:url')
  html = replaceOnce(html, /<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${ta}" />`, 'twitter:title')
  html = replaceOnce(html, /<meta name="twitter:description" content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${da}" />`, 'twitter:description')
  // Event-JSON-LD gehört nur auf die Startseite
  html = html.replace(/\s*<!-- Structured Data: Event -->\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/, '')
  return html
}

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8')
if (!template.includes(OUTLET)) {
  throw new Error(`prerender: Platzhalter ${OUTLET} fehlt in dist/index.html`)
}

try {
  const entry = fs.readdirSync(ssrDir).find((f) => /^entry-server\.(m?js)$/.test(f))
  if (!entry) throw new Error('prerender: dist-ssr/entry-server.js nicht gefunden')
  const { render } = await import(pathToFileURL(path.join(ssrDir, entry)).href)

  for (const { url, file, head } of routes) {
    const appHtml = render(url)
    if (!appHtml || appHtml.length < 200) throw new Error(`prerender: leeres Markup für ${url}`)
    let html = applyHead(template, url, head)
    html = html.replace(OUTLET, `<div id="root" data-prerendered="${url}">${appHtml}</div>`)
    const out = path.join(distDir, file)
    fs.mkdirSync(path.dirname(out), { recursive: true })
    fs.writeFileSync(out, html)
    console.log(`prerender: ${url} → dist/${file} (${(html.length / 1024).toFixed(1)} kB)`)
  }
} finally {
  fs.rmSync(ssrDir, { recursive: true, force: true })
}
