import { useState } from 'react'
import './App.css'

function App() {
  
  const [num , setnum] = useState(0);
  
  
  function increasenum(){
    setnum(num + 1);    //it run as function call
  }

  function decreasenum(){
    setnum(num - 1);
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increasenum}>Increase</button>
      <button onClick={decreasenum}>Decrease</button>
    </div>
  )
}

export default App
