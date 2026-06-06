import React,{ useState } from 'react'
import styles from "./Queue.module.css"
const Queue = () => {

    const [queue, setqueue] = useState([]);
    const [front, setfront] = useState(-1);
    const [rear, setrear] = useState(-1);
    const [num, setnum] = useState(0);

    let enqueuefun = () => {
        if(queue.length === 0)
        {
            setqueue((prev)=>[...prev, num]);
            setfront((prev) => prev + 1);
            setrear((prev) => prev + 1);
            setnum((prev) => prev + 1);
        }
        else
        {
            setqueue((prev)=>[...prev, num]);
            setrear((prev) => prev + 1);
            setnum((prev) => prev + 1);
        }
    }


    let dequeuefun =() => {
        if(queue.length !== 0)
        {
            setqueue((prev)=> prev.slice( 0, -1 ));
            setfront((prev)=> prev + 1)
        }
        if(front === rear)
        {
            setfront(-1)
            setrear(-1)
        }
    }
  return (
    <div>
        <div className={styles.container_queue}>

         <h2>Fornt Position: {front}</h2>
          <h2>Rear Position: {rear}</h2>

              <div className={styles.queueItems}>
                {queue.map((item, index) => (
                <div key={index} className={styles.queue_box}>
                    {item}
                </div>
                ))}
            </div>
            <button className={styles.enqueuebtn}
            onClick={enqueuefun}
            >Enqueue</button>

             <button className={styles.dequeuebtn}
            onClick={dequeuefun}
            >Dequeue</button>
      </div>
      
    </div>
  )
}

export default Queue
