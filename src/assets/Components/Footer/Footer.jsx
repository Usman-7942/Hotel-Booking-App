import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className={styles.footer_top}>

        <div className={styles.footer_section}>
          <h2>🏨 Hotels</h2>
          <p>
            Find your perfect stay anywhere in the world.
            Book hotels, resorts, and apartments with ease.
          </p>
        </div>

        <div className={styles.footer_section}>
          <h3>Quick Links</h3>
          <p>Home</p>
          <p>Hotels</p>
          <p>Offers</p>
          <p>Destinations</p>
        </div>

        <div className={styles.footer_section}>
          <h3>Support</h3>
          <p>Contact Us</p>
          <p>Help Center</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>

        <div className={styles.footer_section}>
          <h3>Contact</h3>
          <p>📍 Lahore, Pakistan</p>
          <p>📞 +92 300 1234567</p>
          <p>✉ support@hotels.com</p>
        </div>

      </div>

      <div className={styles.footer_bottom}>
        <p>© 2026 Hotels. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;