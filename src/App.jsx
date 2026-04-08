import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EventIntro from './components/EventIntro'
import Dates from './components/Dates'
import Highlights from './components/Highlights'
import Atmosphere from './components/Atmosphere'
import Location from './components/Location'
import Sponsors from './components/Sponsors'
import LeadForm from './components/LeadForm'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
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
        <LeadForm />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
