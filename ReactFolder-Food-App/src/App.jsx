import React from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Food from './assets/Food'
import ViewDetails from './assets/Components/ViewDetails/ViewDetails'
import AddFood from './assets/Components/ViewDetails/AddFood/AddFood'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Food/>} />
      <Route path="/viewdetails/:id" element={<ViewDetails/>} />
      <Route path="/addmore" element={<AddFood/>} />
    </Routes>
  )
}

export default App
