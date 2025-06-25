import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import ParticlesComponent from './components/PartialsBackground'
import Education from './pages/Education'
import Projects from './pages/Projects'
import Footer from './components/Footer'
import ContactMe from './pages/ContactMe'
import Skills from './pages/Skills'

function App() {

  return (
    <div className='h-screen w-full bg-background scroll-smooth' >
      <Navbar />
      <Home id="home"/>
      <AboutMe id="about"/>
      <Skills id="skills"/>
      <Education id="education"/>
      <Projects id="project"/>
      <ContactMe id="contactme"/>
      {/* <Footer /> */}
    </div>
  )
}

export default App
