import { useState } from 'react'
import { useInView } from '../hooks/useInView'

// ─── To connect to Formspree:  action="https://formspree.io/f/YOUR_ID"  ──────
// ─── To connect to EmailJS:    call emailjs.send() in handleSubmit        ──────
const FORM_ENDPOINT = '' // Leave empty for frontend-only demo

const initialState = {
  name:       '',
  firma:      '',
  email:      '',
  telefon:    '',
  teilnahme:  '',
  nachricht:  '',
}

const teilnahmeOptions = [
  { value: '',            label: 'Bitte wählen …' },
  { value: 'sponsor',     label: 'Sponsor' },
  { value: 'haendler',    label: 'Händler' },
  { value: 'foodtruck',   label: 'Foodtruck' },
  { value: 'aussteller',  label: 'Aussteller' },
  { value: 'sonstiges',   label: 'Sonstiges' },
]

export default function LeadForm() {
  const [ref, inView]   = useInView()
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const validate = () => {
    const e = {}
    if (!form.name.trim())        e.name       = 'Bitte gib deinen Namen ein.'
    if (!form.email.trim())       e.email      = 'E-Mail-Adresse fehlt.'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Bitte gültige E-Mail eingeben.'
    if (!form.teilnahme)          e.teilnahme  = 'Bitte Art der Teilnahme wählen.'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('sending')

    // ─── Connect to a real backend here ────────────────────────────────────
    // Option A: Formspree
    //   const res = await fetch(FORM_ENDPOINT, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    //     body: JSON.stringify(form),
    //   })
    //   setStatus(res.ok ? 'success' : 'error')
    //
    // Option B: EmailJS
    //   await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')
    //   setStatus('success')
    // ─────────────────────────────────────────────────────────────────────────

    // Demo: simulate network delay
    await new Promise(r => setTimeout(r, 900))
    setStatus('success')
    setForm(initialState)
  }

  // ─── Success state ─────────────────────────────────────────────────────────
  if (status === 'success') {
    return (
      <section id="partner-form" className="bg-biker-dark relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-biker-orange/30 to-transparent" />
        <div className="max-w-2xl mx-auto px-5 md:px-8 py-24 md:py-32 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-biker-orange text-biker-orange mb-6">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-biker-white tracking-wider mb-4">
            ANFRAGE GESENDET!
          </h2>
          <p className="text-biker-chrome text-base leading-relaxed font-light mb-3">
            Vielen Dank für deine Anfrage. Wir melden uns so schnell wie möglich
            persönlich bei dir.
          </p>
          <p className="text-biker-steel text-sm font-light mb-8">
            Bei dringenden Fragen erreichst du uns unter:{' '}
            <a href="mailto:boxzentrumkiel@web.de" className="text-biker-orange hover:underline">
              boxzentrumkiel@web.de
            </a>
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="btn-outline text-sm"
          >
            Weitere Anfrage senden
          </button>
        </div>
      </section>
    )
  }

  return (
    <section id="partner-form" className="bg-biker-dark relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-biker-orange/30 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-5 md:px-8 py-24 md:py-32">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left: intro text */}
          <div className={`animate-on-enter-left ${inView ? 'in-view' : ''}`}>
            <span className="section-label">Partneranfrage</span>
            <span className="accent-line" />
            <h2 className="font-display text-[clamp(2.5rem,5.5vw,4rem)] leading-[0.92] tracking-[0.03em] text-biker-white mb-6">
              WERDE
              <br />
              PARTNER DER
              <br />
              <span className="text-biker-orange">BIKER DAYS.</span>
            </h2>
            <p className="text-biker-chrome text-base leading-relaxed font-light mb-5">
              Du möchtest Teil der Kieler Biker Days 2026 werden?
              Dann sende uns deine Anfrage direkt über das Formular.
              Ob Sponsor, Händler, Foodtruck oder Aussteller – wir finden
              das passende Paket für dich.
            </p>
            <p className="text-biker-steel text-sm leading-relaxed font-light mb-8">
              Wir melden uns schnell und persönlich. Plätze und Standkapazitäten
              sind begrenzt – je früher du anfragst, desto besser.
            </p>

            {/* Contact hint */}
            <div className="border border-biker-border bg-biker-surface p-5 space-y-3">
              <div className="font-condensed text-xs font-bold uppercase tracking-[0.2em] text-biker-orange">
                Direkt schreiben
              </div>
              <a
                href="mailto:boxzentrumkiel@web.de"
                className="flex items-center gap-3 text-biker-chrome hover:text-biker-orange transition-colors duration-300 group"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 flex-shrink-0 text-biker-orange">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="font-condensed font-semibold text-sm tracking-wider group-hover:underline">
                  boxzentrumkiel@web.de
                </span>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className={`animate-on-enter-right ${inView ? 'in-view' : ''} delay-200`}>
            <form
              onSubmit={handleSubmit}
              action={FORM_ENDPOINT || undefined}
              method={FORM_ENDPOINT ? 'POST' : undefined}
              noValidate
              className="space-y-5"
            >
              {/* Row: Name + Firma */}
              <div className="grid sm:grid-cols-2 gap-5">
                <FormField
                  label="Name *"
                  name="name"
                  type="text"
                  placeholder="Dein Name"
                  value={form.name}
                  error={errors.name}
                  onChange={handleChange}
                />
                <FormField
                  label="Firma"
                  name="firma"
                  type="text"
                  placeholder="Unternehmen"
                  value={form.firma}
                  onChange={handleChange}
                />
              </div>

              {/* Row: Email + Telefon */}
              <div className="grid sm:grid-cols-2 gap-5">
                <FormField
                  label="E-Mail *"
                  name="email"
                  type="email"
                  placeholder="deine@email.de"
                  value={form.email}
                  error={errors.email}
                  onChange={handleChange}
                />
                <FormField
                  label="Telefon"
                  name="telefon"
                  type="tel"
                  placeholder="+49 …"
                  value={form.telefon}
                  onChange={handleChange}
                />
              </div>

              {/* Teilnahme dropdown */}
              <div>
                <label className="block font-condensed text-xs font-bold uppercase tracking-[0.18em] text-biker-steel mb-2">
                  Art der Teilnahme *
                </label>
                <select
                  name="teilnahme"
                  value={form.teilnahme}
                  onChange={handleChange}
                  className={`w-full bg-biker-surface-2 border text-biker-chrome font-body text-sm px-4 py-3 focus:outline-none focus:border-biker-orange transition-colors duration-200 appearance-none cursor-pointer ${
                    errors.teilnahme ? 'border-red-500' : 'border-biker-border'
                  }`}
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23f97316' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}
                >
                  {teilnahmeOptions.map(o => (
                    <option key={o.value} value={o.value} className="bg-biker-surface">
                      {o.label}
                    </option>
                  ))}
                </select>
                {errors.teilnahme && (
                  <p className="mt-1 text-red-400 text-xs font-condensed">{errors.teilnahme}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block font-condensed text-xs font-bold uppercase tracking-[0.18em] text-biker-steel mb-2">
                  Nachricht
                </label>
                <textarea
                  name="nachricht"
                  rows={5}
                  placeholder="Beschreib kurz, wie du dabei sein möchtest …"
                  value={form.nachricht}
                  onChange={handleChange}
                  className="w-full bg-biker-surface-2 border border-biker-border text-biker-chrome font-body text-sm px-4 py-3 focus:outline-none focus:border-biker-orange transition-colors duration-200 resize-none placeholder:text-biker-steel/50"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-orange w-full text-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    Wird gesendet …
                  </span>
                ) : 'Anfrage senden'}
              </button>

              <p className="text-biker-steel/60 text-xs font-light text-center">
                * Pflichtfelder. Deine Daten werden vertraulich behandelt.
              </p>
            </form>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-biker-border to-transparent" />
    </section>
  )
}

// ─── Reusable field component ────────────────────────────────────────────────
function FormField({ label, name, type = 'text', placeholder, value, error, onChange }) {
  return (
    <div>
      <label htmlFor={name} className="block font-condensed text-xs font-bold uppercase tracking-[0.18em] text-biker-steel mb-2">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete="off"
        className={`w-full bg-biker-surface-2 border text-biker-chrome font-body text-sm px-4 py-3 focus:outline-none focus:border-biker-orange transition-colors duration-200 placeholder:text-biker-steel/50 ${
          error ? 'border-red-500' : 'border-biker-border'
        }`}
      />
      {error && <p className="mt-1 text-red-400 text-xs font-condensed">{error}</p>}
    </div>
  )
}
