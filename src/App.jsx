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

function App() {

  return (
    <div className='h-screen w-full bg-background scroll-smooth' >
      <Navbar />
      <Home id="home"/>
      <AboutMe id="about"/>
      <Education id="education"/>
      <Projects id="project"/>
    </div>
  )
}

export default App
