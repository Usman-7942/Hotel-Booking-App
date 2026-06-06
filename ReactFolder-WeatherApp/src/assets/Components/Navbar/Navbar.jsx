import React from 'react'
import styles from "./Navbar.module.css"
const Navbar = () => {
  return (
    <div>
      <div className={styles.navbar_container}>
        
        <div className={styles.logo_div}>
            🌦️ Logo 
        </div>

        <div className={styles.buttons_div}>
            <button className={styles.btn}>Home</button>
            <button className={styles.btn}>Forecast</button>
            <button className={styles.btn}>About</button>
            <button className={styles.btn}>🔍 Search </button>
        </div>

        <div className={styles.profile_div}>
            <button className={styles.darkmode_btn}>  🌙 </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
