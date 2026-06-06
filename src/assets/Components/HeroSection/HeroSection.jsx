import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./HeroSection.module.css"
const HeroSection = () => {

  const navigate = useNavigate()

  
  return (
     <div className={styles.hero_container}>
      <p className={styles.para1}>"Find your perfect stay anywhere"</p>
      <p className={styles.para2}>
        "Book hotels, resorts & apartments easily"
      </p>

      <div className={styles.section_div}>
        <p className={styles.info_text}>
          Explore thousands of hotels worldwide with best prices and deals.
        </p>

        <button className={styles.searchbtn}
           onClick={() => navigate("/hotelspage")}
        >
          Start Exploring
        </button>
      </div>
    </div>
  )
}

export default HeroSection
