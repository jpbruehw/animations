import Navbar from './sections/navbar/Navbar'
import Hero from './sections/hero/Hero'
import About from './sections/about/About'
import Projects from './sections/projects/Projects'
import BlackjackWrapper from './sections/blackjack-minigame/BlackjackWrapper'

const App = () => {
    //adjust max width here later
  return (
    <main className="mx-auto max-w-[1750px]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <BlackjackWrapper />
    </main>
  )
}

export default App