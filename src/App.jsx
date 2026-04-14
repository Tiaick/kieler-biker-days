import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EventIntro from './components/EventIntro'
import Dates from './components/Dates'
import Highlights from './components/Highlights'
import Atmosphere from './components/Atmosphere'
import Location from './components/Location'
import Sponsors from './components/Sponsors'
import PartnerLogos from './components/PartnerLogos'
import LeadForm from './components/LeadForm'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Impressum from './pages/Impressum'
import Datenschutz from './pages/Datenschutz'
import CookieBanner from './components/CookieBanner'

function HomePage() {
  return (
    <div className="bg-biker-black font-body text-biker-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <EventIntro />
        <Dates />
        <Highlights />
        <Atmosphere />
        <Location />
        <Sponsors />
        <PartnerLogos />
        <LeadForm />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
      <CookieBanner />
    </>
  )
}
