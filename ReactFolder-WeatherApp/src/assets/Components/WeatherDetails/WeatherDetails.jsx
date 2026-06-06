import React from "react";
import styles from "./WeatherDetails.module.css";

const WeatherDetails = () => {
  return (
    <section className={styles.container}>

      <div className={styles.card}>
        <h3>Humidity</h3>
        <p>70%</p>
      </div>

      <div className={styles.card}>
        <h3>Wind Speed</h3>
        <p>15 km/h</p>
      </div>

      <div className={styles.card}>
        <h3>Pressure</h3>
        <p>1013 hPa</p>
      </div>

      <div className={styles.card}>
        <h3>Feels Like</h3>
        <p>34°C</p>
      </div>

      <div className={styles.card}>
        <h3>Visibility</h3>
        <p>8 km</p>
      </div>

      <div className={styles.card}>
        <h3>UV Index</h3>
        <p>6</p>
      </div>

    </section>
  );
};

export default WeatherDetails;