import { useState } from 'react';
import Card from './assets/Components/Card';
import './App.css'

function App() {

  return (
    <div class="parent">
      <Card username="Umer" age={20} />
      <Card username="Khizar" age={22} img="https://wallpapers.com/images/featured/aesthetic-pictures-hv6f88paqtseqh92.webp"/>
      
    </div>
  )
}

export default App
