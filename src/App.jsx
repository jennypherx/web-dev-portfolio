import { useState } from 'react'
import { Link } from "react-router-dom"
//import './App.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ContactMe from './pages/ContactMe'
import Footer from './components/Footer'



function App() {
  //const [count, setCount] = useState(0)


  return (
    <div>
      <Header />
      <AboutMe />
      <Projects />
      <Contact />
      <ContactMe />
      <Footer />
    </div>
  )
}

export default App
