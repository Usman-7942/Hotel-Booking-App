import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <div>

      <Navbar />

      {/* HERO SECTION */}
      <div className={styles.contact_hero}>
        <p>Contact Us 🍕</p>
        <p>We’d love to hear from you</p>
      </div>

      {/* MAIN SECTION */}
      <div className={styles.contact_container}>

        {/* LEFT SIDE - FORM */}
        <div className={styles.form_box}>
          <p className={styles.heading}>Send Message</p>

          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <input type="text" placeholder="Phone Number" />
          <textarea placeholder="Your Message"></textarea>

          <button>Send Message</button>
        </div>

        {/* RIGHT SIDE - CONTACT INFO */}
        <div className={styles.info_box}>
          <p className={styles.heading}>Contact Info</p>

          <div className={styles.info_item}>
            <span>📍</span>
            <p>Lahore, Pakistan</p>
          </div>

          <div className={styles.info_item}>
            <span>📞</span>
            <p>+92-300-1234567</p>
          </div>

          <div className={styles.info_item}>
            <span>✉️</span>
            <p>support@pizza.com</p>
          </div>

          <div className={styles.info_item}>
            <span>🕒</span>
            <p>Open 24/7</p>
          </div>

        </div>

      </div>

      <Footer />

    </div>
  )
}

export default Contact