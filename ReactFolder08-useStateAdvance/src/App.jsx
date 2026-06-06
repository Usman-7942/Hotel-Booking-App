

import { useState } from 'react'
import './App.css'

function App() {

  const [num , setnum] = useState(0);
    
    
    function btnclicked(){
 
      // setnum(num + 1);   
      // setnum(num + 1);
      // setnum(num + 1);

      
      // React waits… it doesn’t update instantly.
      // It schedules the update for later. in useState
      //the state do not update immediately so it
      //feel like async


      //Batching = React groups multiple state updates into ONE render


      //the function in React are async + batch so
      //all the setnum(num + 1) use num previous value which is
      //num = 0 and used in all setnum() function
      //previous will work no matter it is simple function or
      //the arrow function
      // setnum(function(prev) {
      // return prev + 1;
      // });

      setnum(prev => (prev + 1));
      setnum(prev => (prev + 1));
      setnum(prev => (prev + 1));
      setnum(prev => (prev + 1));




      
    }
  
    
  

  return (
    <>
    <h1>{num}  </h1>
    <button onClick={btnclicked}>Click</button>
    </>
  )
}

export default App
