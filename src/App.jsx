import React from 'react'
import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Expertise from './components/Expertise'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import VisitorCounter from './components/VisitorCounter'
import MouseTrail from './components/MouseTrail'

function App() {
  return (
    <div className="app">
      <MouseTrail />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <VisitorCounter />
    </div>
  )
}

export default App