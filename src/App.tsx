import BentoGrid from './components/BentoGrid'
import CTA from './components/CTA'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import SmoothScroll from './components/SmoothScroll'

const App = () => {
  return (
    <>
      <SmoothScroll />
      <main className="relative w-full overflow-x-hidden">
        <Navbar />
        <Hero />
        <BentoGrid />
        <Features />
        <CTA />
        <Footer />
      </main>
    </>
  )
}

export default App