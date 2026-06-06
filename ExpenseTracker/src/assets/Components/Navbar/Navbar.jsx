import React from 'react'
import styles from "./Navbar.module.css"
const Navbar = () => {
  return (
    <div>
      <div className={styles.navbar_container}>
        <div className={styles.logo_div}>
          <span className={styles.btn}>Logo</span>
        </div>


        <div className={styles.btns_div}>
          <button className={styles.btn}>Dashboard</button>
          <button className={styles.btn}>Transcation</button>
          <button className={styles.btn}>Analystics</button>
          <button className={styles.btn}>Search</button>
        </div>


        <div className={styles.profile_div}>
           <span className={styles.pbtn}> 🔔 </span>
           <span className={styles.pbtn}> 🌙 </span>
           <span className={styles.pbtn}> 👤 </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
