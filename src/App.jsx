import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <About />

      Hello from my web dev portfolio app!
    </div>
  )
}

export default App
