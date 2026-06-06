import { useState } from 'react'
import Navbar from './Components/Navbar'
import Navbar2 from './Components/Navbar2'
import Buttons from './Components/Buttons'
import './App.css'

function App() {

  const [theme, settheme] = useState("light")

  return (
    <div>
     <Navbar theme={theme}/>
     <Buttons/>
    </div>
  )
}

export default App
