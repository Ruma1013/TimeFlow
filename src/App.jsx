import Navbar from './components/sections/Navbar'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import Workflow from './components/sections/Workflow'
import Steps from './components/sections/Steps'
import Audience from './components/sections/Audience'
import Benefits from './components/sections/Benefits'
import Testimonials from './components/sections/Testimonials'
import Pricing from './components/sections/Pricing'
import CTA from './components/sections/CTA'
import Footer from './components/sections/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Workflow />
        <Steps />
        <Audience />
        <Benefits />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
