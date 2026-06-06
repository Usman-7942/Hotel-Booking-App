import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Navbar from '../../ReactFolder15-Advance-Routing/src/Components/Navbar'


function App() {

  return (
   <div>

    <Navbar/>
     <Routes>   //Only things in the Routes tag change other do not changes
      <Route path='/' element={<Home/>}  />
      <Route path='/about' element={<About/>}  />
      <Route path='/contact' element={<Contact/>}  />
      <Route path='/products' element={<Product/>}  />
    </Routes>

    <h4>This is a Footer</h4>
   </div>
  )
}

export default App
