import { useInView } from '../hooks/useInView'

export default function Contact() {
  const [ref, inView] = useInView()

  return (
    <section id="kontakt" className="bg-biker-black relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-biker-orange/30 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className={`animate-on-enter-left ${inView ? 'in-view' : ''}`}>
            <span className="section-label">Kontakt</span>
            <span className="accent-line" />
            <h2 className="font-display text-[clamp(2.2rem,5vw,3.8rem)] leading-[0.92] tracking-[0.04em] text-biker-white mb-6">
              NOCH FRAGEN?
              <br />
              <span className="text-biker-orange">SCHREIB UNS.</span>
            </h2>
            <p className="text-biker-chrome text-base leading-relaxed font-light mb-8">
              Für Fragen rund um das Event, Partneranfragen, Presse
              oder allgemeine Infos stehen wir gerne zur Verfügung.
              Wir freuen uns auf deine Nachricht.
            </p>

            {/* Organizer card */}
            <div className="border border-biker-border bg-biker-surface p-6 md:p-7">
              <div className="font-condensed text-xs font-bold uppercase tracking-[0.2em] text-biker-orange mb-4">
                Veranstalter
              </div>
              <div className="font-display text-2xl text-biker-white tracking-wider mb-3">
                BOXZENTRUM KIEL
              </div>
              <p className="text-biker-steel text-sm font-light mb-5 leading-relaxed">
                Organisiert mit Leidenschaft. Für die Biker-Community in Kiel
                und ganz Schleswig-Holstein.
              </p>
              <a
                href="mailto:boxzentrumkiel@web.de"
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 border border-biker-orange/50 flex items-center justify-center text-biker-orange group-hover:bg-biker-orange group-hover:text-biker-black transition-all duration-300 flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <span className="font-condensed font-semibold text-biker-chrome group-hover:text-biker-orange transition-colors duration-300 tracking-wider">
                  boxzentrumkiel@web.de
                </span>
              </a>
            </div>
          </div>

          {/* Right: quick contact info */}
          <div className={`animate-on-enter-right ${inView ? 'in-view' : ''} delay-200`}>
            <div className="space-y-6">

              {/* Event details recap */}
              <div className="border border-biker-border bg-biker-surface p-6">
                <div className="font-condensed text-xs font-bold uppercase tracking-[0.2em] text-biker-orange mb-5">
                  Event-Details auf einen Blick
                </div>
                <div className="space-y-4">
                  {[
                    { icon: '📅', label: 'Datum', val: '30. & 31. Mai 2026' },
                    { icon: '🕙', label: 'Einlass', val: 'Ab 10:00 Uhr' },
                    { icon: '📍', label: 'Ort', val: 'Tonberg 15, 24113 Kiel' },
                    { icon: '💶', label: 'Eintritt', val: 'Kostenlos' },
                  ].map(({ icon, label, val }) => (
                    <div key={label} className="flex items-start gap-4">
                      <span className="text-base flex-shrink-0 mt-0.5" aria-hidden>{icon}</span>
                      <div>
                        <div className="font-condensed text-xs font-bold uppercase tracking-wider text-biker-steel/70">
                          {label}
                        </div>
                        <div className="font-condensed font-semibold text-biker-chrome text-sm mt-0.5">
                          {val}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social placeholder */}
              <div className="border border-biker-border bg-biker-surface p-6">
                <div className="font-condensed text-xs font-bold uppercase tracking-[0.2em] text-biker-orange mb-4">
                  Social Media
                </div>
                <p className="text-biker-steel text-sm font-light mb-4">
                  Folge uns für aktuelle Infos, Updates und Einblicke hinter die Kulissen.
                </p>
                <div className="flex gap-3">
                  {/* Facebook */}
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="w-10 h-10 border border-biker-border flex items-center justify-center text-biker-steel hover:border-biker-orange hover:text-biker-orange transition-all duration-300"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="w-10 h-10 border border-biker-border flex items-center justify-center text-biker-steel hover:border-biker-orange hover:text-biker-orange transition-all duration-300"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
