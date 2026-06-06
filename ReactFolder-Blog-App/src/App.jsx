import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Blog from './assets/Components/Blog'
import ReadBlog from './assets/Components/ReadBlog'
import AddBlog from './assets/Components/AddBlog'

function App() {

  return (
   <div>
     <Routes>
      <Route path="/" element={<Blog/>}/>
      <Route path="/readmore/:id" element={<ReadBlog/>}/>
      <Route path="/add" element={<AddBlog/>}/>
    </Routes>
   </div>
  )
}

export default App
