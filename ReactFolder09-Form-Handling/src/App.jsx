import { useState } from 'react'
import './App.css'

function App() {


  const [title, settitle] = useState("")
  const submithandler = (dets) => {
    dets.preventDefault();
    console.log("Form Submitted", title);
    //here we get the title which is updated
    //but the title has previous value of settile
    //title has the current value when we type
    //the settitle now has updated and that
    //value is also the current value value
    //first current value is empty and now it is 
    //the value we typed in the input box which
    //we seeing in the input box
    //so therefore the title has settitle value
    //first title has empty when we type
    //due to settitle is inside the onChange the
    //setttitle get value from typing and from
    //empty the current value is also the value
    //that we have now in the setttile or the same
    //value we have in the input


    //in simple we have type something in the input box
    //setttile get value from the input box and title
    //holds the current value which is now the value we
    //have in the input box

    settitle("");
  }

  return (
    <div>
      <form onSubmit={(dets) => {
        submithandler(dets);
      }}>
      

       //by typing we are prefromming the onChange function which
      //changing the settitle and the subtittle change the title 


      <input type="text"
      value={title}
      onChange={(dets) =>{
        settitle(dets.target.value);
      }}
      placeholder="Enter your name"/>


      <button>Submit</button>      
      </form>
      
    </div>
  )
}

export default App
