import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Datenschutz() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = 'Datenschutz – Kieler Biker Days 2026'
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
          <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.88] tracking-[0.04em] text-biker-white">
            DATENSCHUTZ
          </h1>
        </div>

        <div className="space-y-10 text-sm md:text-base leading-relaxed">

          {/* Einleitung */}
          <section>
            <h2 className="font-condensed font-bold text-biker-white uppercase tracking-wider text-lg mb-4 pb-2 border-b border-biker-border">
              Datenschutzerklärung
            </h2>
            <p className="text-biker-steel">
              Der Schutz deiner persönlichen Daten ist uns wichtig. Nachfolgend informieren wir dich
              gemäß Art. 13 DSGVO über die Verarbeitung personenbezogener Daten auf dieser Website.
            </p>
          </section>

          {/* Verantwortlicher */}
          <section>
            <h2 className="font-condensed font-bold text-biker-white uppercase tracking-wider text-lg mb-4 pb-2 border-b border-biker-border">
              Verantwortlicher
            </h2>
            <div className="space-y-1 text-biker-chrome">
              <p className="font-semibold text-biker-white">BoxZentrum Kiel</p>
              <p>Tonberg 15</p>
              <p>24113 Kiel</p>
              <p className="mt-2">
                E-Mail:{' '}
                <a
                  href="mailto:boxzentrumkiel@web.de"
                  className="text-biker-orange hover:underline"
                >
                  boxzentrumkiel@web.de
                </a>
              </p>
            </div>
          </section>

          {/* Hosting */}
          <section>
            <h2 className="font-condensed font-bold text-biker-white uppercase tracking-wider text-lg mb-4 pb-2 border-b border-biker-border">
              Hosting
            </h2>
            <p className="text-biker-steel">
              Diese Website wird auf externen Servern gehostet. Die personenbezogenen Daten, die auf
              dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei
              handelt es sich insbesondere um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
              Vertragsdaten, Kontaktdaten und sonstige Daten, die über eine Website generiert werden.
            </p>
          </section>

          {/* Datenerfassung auf der Website */}
          <section>
            <h2 className="font-condensed font-bold text-biker-white uppercase tracking-wider text-lg mb-4 pb-2 border-b border-biker-border">
              Datenerfassung auf dieser Website
            </h2>

            <h3 className="font-condensed font-semibold text-biker-chrome uppercase tracking-wider text-sm mb-2 mt-5">
              Server-Log-Dateien
            </h3>
            <p className="text-biker-steel mb-4">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten
              Server-Log-Dateien, die dein Browser automatisch übermittelt. Dies sind:
            </p>
            <ul className="list-none space-y-1 text-biker-steel pl-4 mb-4">
              {[
                'Browsertyp und Browserversion',
                'Verwendetes Betriebssystem',
                'Referrer URL',
                'Hostname des zugreifenden Rechners',
                'Uhrzeit der Serveranfrage',
                'IP-Adresse',
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-biker-orange mt-1.5 text-xs">▸</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-biker-steel">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h3 className="font-condensed font-semibold text-biker-chrome uppercase tracking-wider text-sm mb-2 mt-6">
              Kontaktformular
            </h3>
            <p className="text-biker-steel">
              Wenn du uns über das Partnerformular auf dieser Website kontaktierst, werden deine Angaben
              aus dem Formular (Name, Firma, E-Mail, Telefon, Art der Teilnahme, Nachricht) zur
              Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              Diese Daten geben wir nicht ohne deine Einwilligung weiter.
            </p>
            <p className="text-biker-steel mt-2">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
              sofern deine Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
              vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
              Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an
              uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf deiner Einwilligung
              (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.
            </p>
          </section>

          {/* Google Maps */}
          <section>
            <h2 className="font-condensed font-bold text-biker-white uppercase tracking-wider text-lg mb-4 pb-2 border-b border-biker-border">
              Google Maps
            </h2>
            <p className="text-biker-steel mb-3">
              Diese Website nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited,
              Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p className="text-biker-steel mb-3">
              Zur Nutzung der Funktionen von Google Maps ist es notwendig, deine IP-Adresse zu speichern.
              Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen
              und dort gespeichert. Der Anbieter dieser Website hat keinen Einfluss auf diese Datenübertragung.
            </p>
            <p className="text-biker-steel">
              Rechtsgrundlage für die Einbindung von Google Maps ist Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an einer ansprechenden Darstellung der Veranstaltungsörtlichkeit).
              Mehr Informationen zur Datenverarbeitung durch Google findest du in den{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-biker-orange hover:underline"
              >
                Google-Datenschutzbestimmungen
              </a>.
            </p>
          </section>

          {/* Deine Rechte */}
          <section>
            <h2 className="font-condensed font-bold text-biker-white uppercase tracking-wider text-lg mb-4 pb-2 border-b border-biker-border">
              Deine Rechte
            </h2>
            <p className="text-biker-steel mb-4">
              Du hast jederzeit das Recht:
            </p>
            <ul className="list-none space-y-2 text-biker-steel pl-4 mb-4">
              {[
                'Auskunft über deine bei uns gespeicherten Daten zu erhalten (Art. 15 DSGVO)',
                'Die Berichtigung unrichtiger Daten zu verlangen (Art. 16 DSGVO)',
                'Die Löschung deiner Daten zu verlangen (Art. 17 DSGVO)',
                'Die Einschränkung der Verarbeitung zu verlangen (Art. 18 DSGVO)',
                'Der Verarbeitung zu widersprechen (Art. 21 DSGVO)',
                'Datenübertragbarkeit zu verlangen (Art. 20 DSGVO)',
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-biker-orange mt-1.5 text-xs flex-shrink-0">▸</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-biker-steel">
              Außerdem hast du das Recht, dich bei einer Datenschutz-Aufsichtsbehörde über die
              Verarbeitung deiner personenbezogenen Daten zu beschweren. Zuständig ist das{' '}
              <span className="text-biker-chrome">
                Unabhängige Landeszentrum für Datenschutz Schleswig-Holstein (ULD)
              </span>.
            </p>
            <p className="text-biker-steel mt-3">
              Für Anfragen wende dich an:{' '}
              <a
                href="mailto:boxzentrumkiel@web.de"
                className="text-biker-orange hover:underline"
              >
                boxzentrumkiel@web.de
              </a>
            </p>
          </section>

          {/* Aktualität */}
          <section>
            <h2 className="font-condensed font-bold text-biker-white uppercase tracking-wider text-lg mb-4 pb-2 border-b border-biker-border">
              Aktualität dieser Datenschutzerklärung
            </h2>
            <p className="text-biker-steel">
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand April 2026.
              Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher
              bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung
              zu ändern.
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
            <Link to="/impressum" className="font-condensed text-xs text-biker-steel hover:text-biker-orange transition-colors duration-200 tracking-wider">
              Impressum
            </Link>
            <Link to="/datenschutz" className="font-condensed text-xs text-biker-orange tracking-wider">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
