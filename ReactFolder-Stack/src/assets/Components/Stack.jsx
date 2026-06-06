import React,{ useState } from 'react'
import styles from "./Stack.module.css"

const Stack = () => {

    const [stack, setStack] = useState([]);
    const [top, setTop] = useState(-1);
    const [num, setNum] = useState(1);


    // PUSH
    const pushfun = () => {
        setStack((prev) => [...prev, num]);
        setTop((prev) => prev + 1);
        setNum((prev) => prev + 1);
    };


    // POP
    const popfun = () => {
        if (top >= 0) {
        setStack((prev) => prev.slice(0, -1));
        setTop((prev) => prev - 1);
        }
    };

   
     
  return (
    <div>
      <div className={styles.container_stack}>

         <h2>Top Position: {top}</h2>

              <div className={styles.stackItems}>
                {stack.map((item, index) => (
                <div key={index} className={styles.box}>
                    {item}
                </div>
                ))}
            </div>
            <button className={styles.pushbtn}
            onClick={pushfun}
            >Push</button>

             <button className={styles.popbtn}
            onClick={popfun}
            >Pop</button>
      </div>
    </div>
  )
}
export default Stack
