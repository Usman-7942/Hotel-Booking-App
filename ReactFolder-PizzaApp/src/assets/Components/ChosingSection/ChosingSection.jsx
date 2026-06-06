import React from 'react'
import styles from "./ChosingSection.module.css"
const ChosingSection = () => {
  return (
    <div>
      <div className={styles.heading}>
        <p>Why Choose us <span>🍕</span></p>
        <p>"Fresh, Fast and Affordable Pizzas"</p>
      </div>



      <div className={styles.container}>


            <div className={styles.div1}>
                <span className={styles.delivery_image}>🚚</span>
                <h2>Fast Delivery</h2>
                <p>Get your pizza in 30 minutes or less, hot & fresh.</p>
            </div>




            <div className={styles.div2}>
                <span className={styles.ingredients_image}>🧀</span>
                <h2>Fresh Ingredients</h2>
                <p>We use 100% fresh vegetables and cheese daily.</p>
            </div>


            <div className={styles.div3}>
                <span className={styles.price_image}>💰</span>
                <h2>Best Prices</h2>
                <p>Affordable meals with combo deals for everyone.</p>
            </div>



            <div className={styles.div4}>
                <span className={styles.rating_image}>⭐</span>
                <h2>Top Rated</h2>
                <p>Loved by thousands of happy customers worldwide.</p>
            </div>
      </div>
    </div>
  )
}

export default ChosingSection
