import { useState } from 'react'
import Stack from './assets/Components/Stack'
import Queue from "./assets/Components/Queue"
import LinkList from "./assets/Components/LinkList"
import DoublyLinkList from './assets/Components/DoublyLinkList'
import './App.css'

function App() {

  return (
    <div>
      <Stack/>
      <Queue/>
      <LinkList/>
      <DoublyLinkList/>
    </div>
  )
}

export default App
