import Navbar from './sections/navbar/Navbar'
import Hero from './sections/hero/Hero'
import About from './sections/about/About'

const App = () => {
    //adjust max width here later
  return (
    <main className="mx-auto">
      <Navbar />
      <Hero />
      <About />
    </main>
  )
}

export default App