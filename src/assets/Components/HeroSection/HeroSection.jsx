import React from 'react'
import styles from "./HeroSection.module.css"
const HeroSection = () => {
  return (
    <div>
      <div className={styles.hero_container}>
        <p className={styles.para1}>"Find your perfect stay anywhere"</p>
        <p className={styles.para2}>"Book hotels, resorts & apartments easily" </p>
        
        <div className={styles.section_div}>
            <input className={styles.input_box} type='text' placeholder='Location'/>

            <input className={styles.input_box} type='date'/>

            <input className={styles.input_box} type='date'/>

            <select> 
                <option> 1 Guest</option>
                <option> 2 Guests</option>
                <option> 3+ Guests</option>
            </select>

            <button className={styles.searchbtn}> Search</button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
