import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-biker-dark border-t border-biker-border">

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-16">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-biker-orange text-xl leading-none">⬡</span>
              <span className="font-display text-2xl tracking-[0.06em] text-biker-white">
                KBD<span className="text-biker-orange">·</span>2026
              </span>
            </div>
            <p className="text-biker-steel text-sm font-light leading-relaxed max-w-xs">
              Das erste große Biker-Event in Kiel.
              Zwei Tage, ein Feeling, eine Community.
            </p>
            <div className="mt-6">
              <span className="font-condensed text-xs font-bold uppercase tracking-[0.2em] text-biker-orange/70">
                Organisiert von
              </span>
              <div className="font-condensed font-semibold text-biker-chrome text-sm mt-1 tracking-wider">
                BoxZentrum Kiel
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="font-condensed text-xs font-bold uppercase tracking-[0.2em] text-biker-orange mb-5">
              Navigation
            </div>
            <ul className="space-y-2">
              {[
                { label: 'Start',          href: '#start' },
                { label: 'Event',          href: '#event' },
                { label: 'Highlights',     href: '#highlights' },
                { label: 'Location',       href: '#location' },
                { label: 'Sponsoren',      href: '#sponsoren' },
                { label: 'Kontakt',        href: '#kontakt' },
              ].map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-condensed text-sm text-biker-steel hover:text-biker-orange transition-colors duration-200 tracking-wide"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Event facts */}
          <div>
            <div className="font-condensed text-xs font-bold uppercase tracking-[0.2em] text-biker-orange mb-5">
              Event
            </div>
            <div className="space-y-3 text-sm">
              <div>
                <div className="font-condensed font-semibold text-biker-chrome tracking-wide">
                  1. Kieler Biker Days 2026
                </div>
              </div>
              <div className="text-biker-steel font-light">
                30.–31. Mai 2026
              </div>
              <div className="text-biker-steel font-light">
                Tonberg 15, 24113 Kiel
              </div>
              <div className="text-biker-steel font-light">
                Einlass ab 10:00 Uhr
              </div>
              <div className="mt-4">
                <a
                  href="mailto:info@kieler-bikerdays.de"
                  className="font-condensed text-biker-orange hover:text-biker-orange-glow transition-colors duration-200 text-sm tracking-wide"
                >
                  info@kieler-bikerdays.de
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-biker-border/50">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-condensed text-xs text-biker-steel/60 tracking-wider text-center sm:text-left">
            © {year} BoxZentrum Kiel · Kieler Biker Days 2026 · Alle Rechte vorbehalten
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/impressum"
              className="font-condensed text-xs text-biker-steel/60 hover:text-biker-orange transition-colors duration-200 tracking-wider"
            >
              Impressum
            </Link>
            <span className="text-biker-border">|</span>
            <Link
              to="/datenschutz"
              className="font-condensed text-xs text-biker-steel/60 hover:text-biker-orange transition-colors duration-200 tracking-wider"
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
