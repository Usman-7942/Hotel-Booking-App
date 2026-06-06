import React,{ useState } from 'react'
import styles from "./ToDoApp.module.css"
const ToDoApp = () => {


    const [input, setinput] = useState("");
    const [task, settask] = useState([]);
    const [boxshow, setboxshow] = useState(false);
    const [datashow, setdatashow] = useState(false);
    const [originaltasklist, setoriginaltasklist] = useState([]);




    let addfun = (value) => {
        let tasklist;
        let olddata;
        let updatedata;

        olddata = JSON.parse(localStorage.getItem("originaltask_list")) || [];
        updatedata = [ ...olddata, value]
        localStorage.setItem("originaltask_list", JSON.stringify(updatedata))

        localStorage.setItem("task_list", JSON.stringify([ ...task, value ]))
        tasklist = JSON.parse(localStorage.getItem("task_list"));
        settask(tasklist);
        setinput("");
    }

    let deletefun = (id) => {
        let variable;
        let newtasklist
        variable = JSON.parse(localStorage.getItem("task_list"));
        newtasklist = variable.filter((item,index) => index !== id);
        localStorage.setItem("task_list", JSON.stringify(newtasklist))
        settask(newtasklist);
    }



    let toggleboxfun = () => {

        setboxshow( prev => !prev );
    }

    let toggledatafun = () => {
        let variable;
        variable = JSON.parse(localStorage.getItem("originaltask_list"));
        setoriginaltasklist(variable);
        setdatashow( prev => !prev );
    }

    let clearalldata = () => {
        localStorage.removeItem("originaltask_list");
        localStorage.setItem("originaltask_list", JSON.stringify([]));
    }
  return (
    <div>

        <div className={styles.original_show}>

            <button className={styles.showbtn}
            onClick={toggleboxfun}
            >Show Box</button>

            <button className={styles.databtn}
            onClick={toggledatafun}
            >Show Data</button>   


             <button className={styles.databtn}
            onClick={ clearalldata }
            >Clear All Data</button>   

        </div>

          {
                boxshow === true && (
                    <div className={styles.details_div}>
                       {
                         boxshow === true && datashow === true && (
                            originaltasklist.map((item)=>(
                                <p className={styles.show_para}>{item}</p>
                            ))
                         )
                       }
                       {
                         boxshow === true && datashow === true &&
                         originaltasklist.length === 0 && (
                            <p className={styles.show_para}>{"NO Data"}</p>
                         )

                       }
                    </div>
                )
          }


      <div className={styles.container}>

        <div className={styles.heading}>ToDo App</div>

        <div className={styles.add_div}>
            <input className={styles.inputbox} type="text"
            placeholder="Add Your Task"
            value={input}
            onChange={(dets) => setinput(dets.target.value)}
            />
            <button className={styles.addbtn}
            onClick={() => addfun(input)}
            >Add</button>
        </div>


        <div className={styles.task_div}>
           {
                task.map((item,index)=>(
                    <div className={styles.task_box} key={index}>
                <div className={styles.task_upper}>
                            <input className={styles.checkbtn} type="checkbox" />
                            <p className={styles.para}>{item}</p>
                        </div>
                        <div className={styles.delete_div}>
                            <button className={styles.deletebtn}
                            onClick={() => deletefun(index)}
                            >
                                Delete
                            </button>
                    </div>
                </div>
                ))
           }
        </div>
      </div>
    </div>
  )
}

export default ToDoApp
