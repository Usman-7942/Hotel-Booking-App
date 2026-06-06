import React from "react";
import styles from "./HeroSection.module.css";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroLeft}>
        <h1>Check Weather Anywhere</h1>

        <h2>32°C</h2>

        <p>Sunny ☀️</p>

        <div className={styles.heroSearch}>
          <input
            type="text"
            placeholder="Enter city name"
          />

          <button>
            Search
          </button>
        </div>
      </div>

      <div className={styles.heroRight}>
        <img
          src="weather-image.png"
          alt="Weather"
        />
      </div>
    </section>
  );
};

export default HeroSection;