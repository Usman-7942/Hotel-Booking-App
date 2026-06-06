import { useState } from 'react'
import './App.css'

function App() {

  let submithandler = (dets) =>{

    dets.preventDefault();
    console.log("Form Submitted");


    let copytask = [...task];


    copytask.push({title, details})


    settask(copytask);

    settitle("");
    setdetails("");
  }


  let deletenote = (index) => {
    let copytask = [...task];   //taking all task

    copytask.splice( index, 1);  //deleting specific task using index

    settask(copytask);           //passing all the remainning task to
                                 //the settask state
  }

  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");
  
  
  const [task, settask] = useState([]);
  
  
  return (
    <>
      <div className="container">
      
      
      <div className="left">
        <form onSubmit={submithandler}>


          {/* First Input */}
          <input type="text" placeholder="Enter note heading..."
          value={title}
          onChange={(dets) => {
            settitle(dets.target.value); 
          }}
          required />
          

          {/* Second Input */}
          <textarea placeholder="Enter note details..."
          value={details}
          onChange={(dets) => {
            setdetails(dets.target.value);
          }}
          required></textarea>
          

          
          <button type="submit">Add Note</button>
        </form>
      </div>



      
      <div className="right">
        <h2>My Notes</h2>
          {task.map( function(element, index){
            return <div className = "note" key={index}>
                   <h3>{element.title}</h3>
                   <p>{element.details}</p>
                   <button onClick={ function(){
                          deletenote(index);
                   }}
                   className="delete_btn">Delete</button>
            </div>
          })}
      </div>
    </div>

    </>
  )
}

export default App
