import { useState } from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom"
import HomePage from "./assets/Components/Pages/HomePage/HomePage"
import HotelsPage from './assets/Components/Pages/HotelsPage/HotelsPage'
import LoginPage from './assets/Components/Pages/LoginPage/LoginPage'
import SignupPage from './assets/Components/Pages/SignupPage/SignupPage'
import BookedHotelsPage from './assets/Components/Pages/BookedHotelsPage/BookedHotelsPage'
import ProtectedRoute from "./assets/Components/Pages/ProtectedRoute/ProtectedRoute"
import './App.css'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/"   element={<ProtectedRoute><HomePage/></ProtectedRoute>}/>
        <Route path="/hotelspage"  element={<HotelsPage/>}/>
        <Route path="/loginpage"  element={<LoginPage/>}/>
        <Route path="/signuppage"  element={<SignupPage/>}/>
        <Route path="/bookedhotelspage"  element={<BookedHotelsPage/>}/>
      </Routes>
    </div>
  )
}

export default App
