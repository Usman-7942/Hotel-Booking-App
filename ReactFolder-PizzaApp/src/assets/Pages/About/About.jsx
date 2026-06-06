import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import styles from "./About.module.css"

const About = () => {
  return (
    <div>
      <Navbar />

      {/* HERO SECTION */}
      <div className={styles.about_hero}>
        <p>About Our Pizza App 🍕</p>
        <p>Fresh taste, fast delivery, happy customers</p>
      </div>

      {/* STORY SECTION */}
      <div className={styles.story_section}>
        <h2>Our Story</h2>
        <p>
          We started with a simple idea: deliver hot, fresh, and delicious pizzas
          to everyone in minutes. Now we serve thousands of happy customers daily.
        </p>
      </div>

      {/* FEATURES SECTION */}
      <div className={styles.features_section}>

        <div className={styles.feature_card}>
          <h3>🍕 Fresh Ingredients</h3>
          <p>We use 100% fresh ingredients for best taste.</p>
        </div>

        <div className={styles.feature_card}>
          <h3>🚀 Fast Delivery</h3>
          <p>Your pizza arrives hot and fresh in minutes.</p>
        </div>

        <div className={styles.feature_card}>
          <h3>⭐ Best Quality</h3>
          <p>We never compromise on quality and taste.</p>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default About