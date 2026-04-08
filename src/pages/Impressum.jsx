import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Impressum() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Impressum – Kieler Biker Days 2026'
  }, [])

  return (
    <div className="bg-biker-black min-h-screen font-body text-biker-white">

      {/* Top bar */}
      <div className="bg-biker-dark border-b border-biker-border">
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 group"
          >
            <span className="text-biker-orange text-lg leading-none">⬡</span>
            <span className="font-display text-xl tracking-[0.06em] text-biker-white group-hover:text-biker-orange transition-colors duration-300">
              KBD<span className="text-biker-orange">·</span>2026
            </span>
          </Link>
          <Link
            to="/"
            className="font-condensed text-xs font-bold uppercase tracking-widest text-biker-steel hover:text-biker-orange transition-colors duration-200 flex items-center gap-2"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
              <path d="M19 12H5M12 5l-7 7 7 7" />
            </svg>
            Zurück
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24">

        {/* Header */}
        <div className="mb-12">
          <span className="font-condensed text-xs font-bold uppercase tracking-[0.25em] text-biker-orange">
            Rechtliches
          </span>
          <span className="block w-16 h-[3px] bg-biker-orange mt-3 mb-6" />
          <h1 className="font-display text-[clamp(3rem,8vw,6rem)] leading-[0.88] tracking-[0.04em] text-biker-white">
            IMPRESSUM
          </h1>
        </div>

        <div className="space-y-10 text-biker-chrome text-sm md:text-base leading-relaxed">

          {/* Angaben gemäß § 5 TMG */}
          <section>
            <h2 className="font-condensed font-bold text-biker-white uppercase tracking-wider text-lg mb-4 pb-2 border-b border-biker-border">
              Angaben gemäß § 5 TMG
            </h2>
            <div className="space-y-1 text-biker-chrome">
              <p className="font-semibold text-biker-white">BoxZentrum Kiel</p>
              <p>Tonberg 15</p>
              <p>24113 Kiel</p>
            </div>
          </section>

          {/* Kontakt */}
          <section>
            <h2 className="font-condensed font-bold text-biker-white uppercase tracking-wider text-lg mb-4 pb-2 border-b border-biker-border">
              Kontakt
            </h2>
            <div className="space-y-2">
              <p>
                <span className="text-biker-steel">E-Mail:</span>{' '}
                <a
                  href="mailto:info@kieler-bikerdays.de"
                  className="text-biker-orange hover:underline"
                >
                  info@kieler-bikerdays.de
                </a>
              </p>
            </div>
          </section>

          {/* Verantwortlich für Inhalte */}
          <section>
            <h2 className="font-condensed font-bold text-biker-white uppercase tracking-wider text-lg mb-4 pb-2 border-b border-biker-border">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <div className="space-y-1">
              <p className="font-semibold text-biker-white">BoxZentrum Kiel</p>
              <p>Tonberg 15</p>
              <p>24113 Kiel</p>
            </div>
          </section>

          {/* Veranstaltungshinweis */}
          <section>
            <h2 className="font-condensed font-bold text-biker-white uppercase tracking-wider text-lg mb-4 pb-2 border-b border-biker-border">
              Veranstaltung
            </h2>
            <div className="space-y-2">
              <p>
                Diese Website informiert über die Veranstaltung{' '}
                <span className="text-biker-white font-medium">„1. Kieler Biker Days 2026"</span>,
                organisiert vom BoxZentrum Kiel.
              </p>
              <p>
                Veranstaltungsdaten: 30.–31. Mai 2026 · Tonberg 15, 24113 Kiel
              </p>
            </div>
          </section>

          {/* Haftungsausschluss */}
          <section>
            <h2 className="font-condensed font-bold text-biker-white uppercase tracking-wider text-lg mb-4 pb-2 border-b border-biker-border">
              Haftungsausschluss
            </h2>

            <h3 className="font-condensed font-semibold text-biker-chrome uppercase tracking-wider text-sm mb-2">
              Haftung für Inhalte
            </h3>
            <p className="text-biker-steel mb-4">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen.
            </p>

            <h3 className="font-condensed font-semibold text-biker-chrome uppercase tracking-wider text-sm mb-2">
              Haftung für Links
            </h3>
            <p className="text-biker-steel mb-4">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
              Seiten verantwortlich. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links
              umgehend entfernen.
            </p>

            <h3 className="font-condensed font-semibold text-biker-chrome uppercase tracking-wider text-sm mb-2">
              Urheberrecht
            </h3>
            <p className="text-biker-steel">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
              des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>

        </div>
      </div>

      {/* Footer mini */}
      <div className="border-t border-biker-border">
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-condensed text-xs text-biker-steel/60 tracking-wider">
            © {new Date().getFullYear()} BoxZentrum Kiel · Kieler Biker Days 2026
          </p>
          <div className="flex gap-6">
            <Link to="/impressum" className="font-condensed text-xs text-biker-orange tracking-wider">
              Impressum
            </Link>
            <Link to="/datenschutz" className="font-condensed text-xs text-biker-steel hover:text-biker-orange transition-colors duration-200 tracking-wider">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
