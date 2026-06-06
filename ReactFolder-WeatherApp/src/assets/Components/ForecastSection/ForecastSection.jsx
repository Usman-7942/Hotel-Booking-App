import React from "react";
import styles from "./ForecastSection.module.css";

const ForecastSection = () => {
  const data = [
    { day: "Mon", temp: "30°", icon: "☀️" },
    { day: "Tue", temp: "32°", icon: "🌤️" },
    { day: "Wed", temp: "28°", icon: "🌧️" },
    { day: "Thu", temp: "29°", icon: "⛅" },
    { day: "Fri", temp: "31°", icon: "☀️" },
    { day: "Sat", temp: "33°", icon: "🔥" },
    { day: "Sun", temp: "30°", icon: "🌤️" },
  ];

  return (
    <section className={styles.forecast}>
      {data.map((item, index) => (
        <div key={index} className={styles.card}>
          <h4>{item.day}</h4>
          <div className={styles.icon}>{item.icon}</div>
          <p>{item.temp}</p>
        </div>
      ))}
    </section>
  );
};

export default ForecastSection;