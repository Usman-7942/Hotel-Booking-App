import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>

      {/* LEFT */}
      <div className={styles.left}>
        <h3>🌦️ WeatherApp</h3>
        <p>Live weather updates anytime, anywhere.</p>
      </div>

      {/* CENTER */}
      <div className={styles.center}>
        <a href="#">Home</a>
        <a href="#">Forecast</a>
        <a href="#">Cities</a>
        <a href="#">About</a>
      </div>

      {/* RIGHT */}
      <div className={styles.right}>
        <p>© 2026 WeatherApp</p>
      </div>

    </footer>
  );
};

export default Footer;