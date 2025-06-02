import React from 'react'
import Navbar from './sections/navbar/Navbar'
import Hero from './sections/hero/Hero'
const App = () => {
    //adjust max width here later
  return (
    <main className="mx-auto">
      <h1 className="text-2xl text-white underline">
        
      </h1>
      <Navbar />
      <Hero />
    </main>
  )
}

export default App