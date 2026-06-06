import React, {useState} from 'react'

const TaskList = () => {


    const [input, setinput] = useState("");
    const [task, settask] = useState([]);

    let deletetask = (index) =>{
        let newtask = [...task];

        newtask.splice( index, 1 );

        settask(newtask);
    }

  return (
    <div>
      


         <div className="container">


          <div className="header">
            <p>Todo App</p>
          </div>


          <div className="input_div">
            <input className="input_box" type="text" placeholder="Enter your task..."
            value={input}
            onChange={ (dets) => setinput(dets.target.value)}
            />

            <button className="add_btn"
            onClick={()=>{
                if(input.trim() === "")  return;
              
                settask([...task, input]);
                setinput("");
            }}
            >Add</button>
          </div>


          <div className="task_list">
            
            <div className="task_listheading">
              <h2>----------------------------------------------------</h2>
            </div>
            


            {task.map((element, index)=>{
                return( <div className="task" key={index}>
                <div className="task_left">
                    <input type="checkbox" className="checkbox_btn" />
                    <h2>{element}</h2>
                </div>
                <button className="delete_btn"
                onClick={ () => deletetask(index)}
                >X</button>
                </div> )
            })}

        
          
      </div>





    </div>





    </div>
  )
}

export default TaskList
