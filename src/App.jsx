import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import ParticlesComponent from './components/PartialsBackground'
import Education from './pages/Education'
import Projects from './pages/Projects'
import Resume from './pages/Resume'   
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Footer from './components/Footer'

function App() {
  return (
    <div className='h-screen w-full bg-background scroll-smooth'>
      <Navbar />
      <Home id="home" />
      <AboutMe id="about" />
      <Experience id="experience"/>
      <Skills id="skills" />
      <Education id="education" />
      <Projects id="project" />
      <Resume id="resume" /> 
    </div>
  )
}

export default App
