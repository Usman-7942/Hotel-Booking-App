import React, { useState } from 'react'
import styles from "./Slider.module.css"
const Slider = () => {

    const [index, setindex] = useState(0);


    let nextfun = () => {
        setindex( prev => prev + 1 );
    }

    let prevfun = () => {
        if(index != 0)
        {
            setindex(prev => prev - 1 );
        }
    }

  return (
    <div>
        <div className={styles.card_wrapper}>
            <button className={styles.prevbtn}
            onClick={prevfun}
            >
                {"<"}
            </button>
            <div className={styles.card_section}
            style={{ transform : ` translateX(-${index * 7}vw)`}}
            >
                <div className={styles.card}>
                    Card
                </div>

                 <div className={styles.card}>
                    Card
                </div>
                 <div className={styles.card}>
                    Card
                </div>
                 <div className={styles.card}>
                    Card
                </div>
                 <div className={styles.card}>
                    Card
                </div>
                 <div className={styles.card}>
                    Card
                </div>
                 <div className={styles.card}>
                    Card
                </div>
                 <div className={styles.card}>
                    Card
                </div>
                 <div className={styles.card}>
                    Card
                </div>
                 <div className={styles.card}>
                    Card
                </div>
                 <div className={styles.card}>
                    Card
                </div>
                 <div className={styles.card}>
                    Card
                </div>
                 <div className={styles.card}>
                    Card
                </div>
                 <div className={styles.card}>
                    Card
                </div>
            </div>
            <button className={styles.nextbtn}
            onClick={nextfun}
            >
                {">"}
            </button>
        </div>
      
    </div>
  )
}

export default Slider
