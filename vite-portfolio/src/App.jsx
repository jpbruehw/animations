import Navbar from './sections/navbar/Navbar'
import Hero from './sections/hero/Hero'
import About from './sections/about/About'
import Projects from './sections/projects/Projects'
import BlackjackWrapper from './sections/blackjack-minigame/BlackjackWrapper'
import Highlights from './sections/highlights/Highlights'

const App = () => {
    //adjust max width here later
  return (
    <main className="mx-auto max-w-[1750px]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <BlackjackWrapper />
      <Highlights />
    </main>
  )
}

export default App