import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import AboutMe from './components/AboutMe'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <AboutMe />
    </div>
  )
}

export default App
