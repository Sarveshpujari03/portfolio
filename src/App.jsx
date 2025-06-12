import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import ParticlesComponent from './components/PartialsBackground'

function App() {

  return (
    <div className='h-screen w-full bg-background' >
      <Navbar />
      <Home id="home"/>
      <AboutMe id="about"/>
    </div>
  )
}

export default App
