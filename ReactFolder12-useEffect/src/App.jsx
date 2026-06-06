import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {
  const [num, setnum] = useState(0);
  const [num2, setnum2] = useState(10);


  useEffect( function(){
      console.log("useEffect is running...");
  },[num])

  return (
    <div>
        <h1>Num {num}</h1>
        <h1>Num2 {num2}</h1>
        <button onClick={() => {
          setnum(num + 1);
        }}
        >Click Num</button>
         <button onClick={() => {
          setnum2(num2 + 1);
        }}
        >Click Num2</button>
    </div>
  )
}

export default App
