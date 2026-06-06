import { useState } from 'react'
import './App.css'

function App() {

  function fn(ele){
    console.log("User is typing, not definition directly", ele.target.value);
    //console.log(ele) gives the details
    //console.log(ele.target) gives the element
    //console.log(ele.target.value) giving the value of the input
  }
  return (
    <div>
      <input onChange={fn} type="text" placeholder="Enter your name"/>
      <input onChange={fn} type="text" placeholder="Enter your name"/>
 


      <input onChange={function(ele){console.log(`User is typing directly in function definition, ${ele.target.value}`);}} type="text" placeholder="Enter your name"/>
     


      
      
      <input onChange={function(ele){`Function is called ${fn(ele)}`}} type="text" placeholder="Enter your name with function"/>
      


      <h1 onClick={function (){console.log("H1 is clicked")}}>H1 Heading</h1>
      
    </div>
  )
}

export default App
