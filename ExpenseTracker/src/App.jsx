import { useState } from 'react'
import { TransactionProvider } from "./assets/Components/TransactionContext/TransactionContext"
import './App.css'
import Dashboard from './assets/Pages/Dashboard/Dashboard'


function App() {

  return (
    <TransactionProvider>
      <Dashboard/>
    </TransactionProvider>
  )
}

export default App
