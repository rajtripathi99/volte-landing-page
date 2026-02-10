import BentoGrid from './components/BentoGrid'
import Features from './components/Features'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <main className="relative w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <BentoGrid />
      <Features/>
    </main>
  )
}

export default App