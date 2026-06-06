import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Product from './assets/Components/Product'
import ViewDetails from './assets/Components/ViewDetails'
import AddProduct from './assets/Components/AddProduct'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Product/>} />
      <Route path="/viewdetails/:id" element={<ViewDetails/>}  />
      <Route path="/addproduct" element={<AddProduct/>}  />
    </Routes>
  )
}

export default App
