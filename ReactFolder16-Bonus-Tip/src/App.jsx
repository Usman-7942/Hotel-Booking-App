import { useState } from 'react'
import Navbar from './Components/Navbar'
import './App.css'

function App() {

  const [theme, settheme] = useState("light")
  return (
    <div>
      <h1>These is {theme}</h1>
      <Navbar theme={theme}   settheme={settheme}/>
    </div>
  )
}

export default App

