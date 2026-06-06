import React from "react";
import styles from "./PopularCities.module.css";

const PopularCities = ({ onSelectCity }) => {
  const cities = [
    { name: "Lahore", temp: "32°", icon: "☀️" },
    { name: "Karachi", temp: "34°", icon: "🔥" },
    { name: "Islamabad", temp: "30°", icon: "🌤️" },
    { name: "Peshawar", temp: "28°", icon: "🌧️" },
    { name: "Quetta", temp: "29°", icon: "⛅" },
  ];

  return (
    <section className={styles.container}>
      {cities.map((city, index) => (
        <div
          key={index}
          className={styles.card}
          onClick={() => onSelectCity(city.name)}
        >
          <h3>{city.name}</h3>
          <div className={styles.icon}>{city.icon}</div>
          <p>{city.temp}</p>
        </div>
      ))}
    </section>
  );
};

export default PopularCities;