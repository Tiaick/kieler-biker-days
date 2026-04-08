import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Start',            href: '#start' },
  { label: 'Event',            href: '#event' },
  { label: 'Highlights',       href: '#highlights' },
  { label: 'Location',         href: '#location' },
  { label: 'Sponsoren',        href: '#sponsoren' },
  { label: 'Kontakt',          href: '#kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [active,   setActive]     = useState('#start')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = navLinks.map(l => l.href.replace('#', ''))
    const observers = []

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(`#${id}`) },
        { threshold: 0.35 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    setActive(href)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-biker-dark/95 backdrop-blur-md border-b border-biker-border shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-16 md:h-18">

        {/* Logo */}
        <button
          onClick={() => handleNavClick('#start')}
          className="flex items-center gap-2 group"
          aria-label="Zurück zum Anfang"
        >
          <span className="text-biker-orange text-xl leading-none">⬡</span>
          <span className="font-display text-xl md:text-2xl tracking-[0.06em] text-biker-white group-hover:text-biker-orange transition-colors duration-300">
            KBD<span className="text-biker-orange">·</span>2026
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => handleNavClick(href)}
                className={`relative font-condensed font-semibold uppercase tracking-[0.12em] text-sm px-4 py-2 transition-all duration-300 ${
                  active === href
                    ? 'text-biker-orange'
                    : 'text-biker-steel hover:text-biker-white'
                }`}
              >
                {label}
                {active === href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-biker-orange" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#kontakt"
          onClick={(e) => { e.preventDefault(); handleNavClick('#kontakt') }}
          className="hidden lg:inline-block btn-orange text-xs py-3 px-6"
        >
          Jetzt anfragen
        </a>

        {/* Mobile hamburger */}
        <button
          aria-label="Menü öffnen"
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden flex flex-col gap-[6px] p-2 ${menuOpen ? 'hamburger-open' : ''}`}
        >
          <span className="hamburger-line" />
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-biker-dark/98 backdrop-blur-md border-t border-biker-border`}
      >
        <ul className="flex flex-col px-5 py-4 gap-1">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => handleNavClick(href)}
                className={`w-full text-left font-condensed font-semibold uppercase tracking-[0.12em] text-base py-3 border-b border-biker-border/50 transition-colors duration-200 ${
                  active === href ? 'text-biker-orange' : 'text-biker-chrome hover:text-biker-orange'
                }`}
              >
                {label}
              </button>
            </li>
          ))}
          <li className="pt-3">
            <a
              href="#kontakt"
              onClick={(e) => { e.preventDefault(); handleNavClick('#kontakt') }}
              className="btn-orange w-full text-center block"
            >
              Jetzt anfragen
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
