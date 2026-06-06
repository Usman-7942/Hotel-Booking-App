import { useState } from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import HomePage from "./assets/Pages/HomePage/HomePage"
import HotelsPage from './assets/Pages/HotelsPage/HotelsPage'
import LoginPage from './assets/Pages/LoginPage/LoginPage'
import SignupPage from './assets/Pages/SignupPage/SignupPage'
import BookedHotelsPage from './assets/Pages/BookedHotelsPage/BookedHotelsPage'
import ProtectedRoute from "./assets/Pages/ProtectedRoute/ProtectedRoute"
import AboutPage from './assets/Pages/AboutPage/AboutPage'
import './App.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/"   element={<ProtectedRoute><HomePage/></ProtectedRoute>}/>
        <Route path="/hotelspage"  element={<HotelsPage/>}/>
        <Route path="/loginpage"  element={<LoginPage/>}/>
        <Route path="/signuppage"  element={<SignupPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/bookedhotelspage"  element={<BookedHotelsPage/>}/>
      </Routes>
    </div>
  )
}

export default App
