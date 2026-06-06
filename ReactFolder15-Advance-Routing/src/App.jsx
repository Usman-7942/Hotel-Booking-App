import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Courses from './Pages/Courses'
import Products from './Pages/Products'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import NotFound from './Pages/NotFound'
import Men from './Pages/Men'
import Women from './Pages/Women'
import CoursesDetails from './Pages/CoursesDetails'
import Navbar2 from './Components/Navbar2'
import './App.css'

function App() {

  return (
    <>
    <Navbar/>
    <Navbar2/>
    <Routes>   
      <Route path='/' element={<Home/>}  />
      <Route path='/about' element={<About/>}  />
      <Route path='/courses' element={<Courses/>}  />
      <Route path='/courses/:coursedetails' element={<CoursesDetails/>}  />
      {/* <Route path='/courses/:courseid' element={<CoursesDetails/>}  /> */}
      {/* if we do that like /:id  then what ever we write like
      courses/askldjaklj then the coursesdetails page will appears */}
      {/* in coursesdetails.jsx we also use params it helps as
      to identify the page that we add with courses like
      when we type courses/coursesafjh in coursesafjh we
      get the object that have coursesdetails page details
      in that object */}
      <Route path='/products' element={<Products/>}  />
      <Route path='/products/men' element={<Men/>}  />
      <Route path='/products/women' element={<Women/>}  />
      <Route path='*' element={<NotFound/>}  />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
