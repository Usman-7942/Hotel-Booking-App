import React from 'react'
import styles from "./AboutPage.module.css"
import Navbar from '../../Components/Navbar/Navbar'
import Footer from "../../Components/Footer/Footer"
const AboutPage = () => {
  return (
    <div>
    
    
      <Navbar/>
    
    
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>

      <p className={styles.text}>
        Welcome to <b>StayEase Hotels</b>, your trusted platform for easy and
        comfortable hotel bookings. We help you find the best hotels at the
        best prices with just a few clicks.
      </p>

      <p className={styles.text}>
        Our mission is to make travel simple, affordable, and stress-free.
        Whether you're planning a business trip or a vacation, we provide
        verified hotels, smooth booking experience, and secure payments.
      </p>

      <div className={styles.features}>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✔ Easy and fast hotel booking</li>
          <li>✔ Best price comparison</li>
          <li>✔ Trusted and verified hotels</li>
          <li>✔ 24/7 customer support</li>
        </ul>
      </div>

      <p className={styles.footerText}>
        Travel better. Stay smarter. Book with confidence.
      </p>
    </div>



      <Footer/>

      
    </div>
  )
}

export default AboutPage
