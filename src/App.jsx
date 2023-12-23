import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
