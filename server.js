import 'dotenv/config'
import express from 'express'
import nodemailer from 'nodemailer'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

// ─── SMTP-Konfiguration ───────────────────────────────────────────────────
const SMTP_HOST  = 'smtp.hostinger.com'
const SMTP_PORT  = 465
const SMTP_USER  = 'info@kieler-bikerdays.de'
const SMTP_PASS  = process.env.SMTP_PASS   // aus .env (lokal) oder Hostinger-Env
const MAIL_FROM  = '"Kieler Biker Days" <info@kieler-bikerdays.de>'
const MAIL_TO    = 'info@kieler-bikerdays.de'
// ─────────────────────────────────────────────────────────────────────────

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express()

app.use(express.json())

// Statische React-Build-Dateien ausliefern
app.use(express.static(join(__dirname, 'dist')))

console.log('[SMTP] Host:', SMTP_HOST, '| Port:', SMTP_PORT, '| User:', SMTP_USER, '| Pass set:', !!SMTP_PASS)

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: true, // SSL (Port 465)
  auth: { user: SMTP_USER, pass: SMTP_PASS },
})

const teilnahmeLabels = {
  sponsor:    'Sponsor',
  haendler:   'Händler',
  foodtruck:  'Foodtruck',
  aussteller: 'Aussteller',
  sonstiges:  'Sonstiges',
}

app.post('/contact', async (req, res) => {
  console.log('[/contact] Anfrage eingegangen:', req.body)
  const { name, firma, email, telefon, teilnahme, nachricht } = req.body ?? {}

  if (!name?.trim() || !email?.trim() || !teilnahme?.trim()) {
    console.warn('[/contact] Validierung fehlgeschlagen: Pflichtfelder fehlen')
    return res.status(422).json({ ok: false, error: 'Pflichtfelder fehlen' })
  }

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRe.test(email)) {
    console.warn('[/contact] Validierung fehlgeschlagen: Ungültige E-Mail')
    return res.status(422).json({ ok: false, error: 'Ungültige E-Mail-Adresse' })
  }

  const lines = [
    'NEUE PARTNERANFRAGE – Kieler Biker Days 2026',
    '─'.repeat(40),
    `Name:      ${name}`,
    firma     ? `Firma:     ${firma}`     : null,
    `E-Mail:    ${email}`,
    telefon   ? `Telefon:   ${telefon}`   : null,
    `Teilnahme: ${teilnahmeLabels[teilnahme] ?? teilnahme}`,
    nachricht ? `\nNachricht:\n${nachricht}` : null,
    '',
    '─'.repeat(40),
    'Gesendet über das Kontaktformular auf bikerdays-kiel.de',
  ].filter(Boolean)

  try {
    console.log('[/contact] Sende E-Mail via SMTP...')
    await transporter.sendMail({
      from:     MAIL_FROM,
      to:       MAIL_TO,
      replyTo:  `"${name}" <${email}>`,
      subject:  `Neue Partneranfrage: ${name}${firma ? ` (${firma})` : ''}`,
      text:     lines.join('\n'),
    })
    console.log('[/contact] E-Mail erfolgreich gesendet')
    res.json({ ok: true })
  } catch (err) {
    console.error('[/contact] SMTP Fehler:', err.message, '| Code:', err.code, '| Response:', err.response)
    res.status(500).json({ ok: false, error: 'Mailversand fehlgeschlagen' })
  }
})

// Alle anderen Routen → React-App (SPA-Fallback)
app.get('*', (_req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'))
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`))
