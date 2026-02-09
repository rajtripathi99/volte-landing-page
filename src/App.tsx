import BentoGrid from './components/BentoGrid'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <main className="relative w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <BentoGrid />
    </main>
  )
}

export default App