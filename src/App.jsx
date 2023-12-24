//import { useState } from 'react'
//import { Link } from "react-router-dom"
//import './App.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import ContactMe from './components/ContactMe'
import Contact from './pages/Contact'
import Footer from './components/Footer'


function App() {

  return (
    
    <div>
      
      <Header />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
