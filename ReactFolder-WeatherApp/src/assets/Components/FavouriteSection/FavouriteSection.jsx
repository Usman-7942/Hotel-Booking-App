import React, { useState, useEffect } from "react";
import styles from "./FavouriteSection.module.css";

const FavouriteSection = () => {
  const [favorites, setFavorites] = useState([]);

  const addCity = (city) => {
    const updated = [...favorites, city];
    setFavorites(updated);
    localStorage.setItem("cities", JSON.stringify(updated));
  };

  const removeCity = (city) => {
    const updated = favorites.filter((c) => c !== city);
    setFavorites(updated);
    localStorage.setItem("cities", JSON.stringify(updated));
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cities"));
    if (saved) setFavorites(saved);
  }, []);

  return (
    <div className={styles.container}>

      <h2>⭐ Saved Cities</h2>

      {/* Example buttons to test */}
      <div className={styles.buttons}>
        <button onClick={() => addCity("Lahore")}>Add Lahore</button>
        <button onClick={() => addCity("Karachi")}>Add Karachi</button>
      </div>

      {/* LIST */}
      <div className={styles.list}>
        {favorites.map((city, index) => (
          <div key={index} className={styles.card}>
            <span>⭐ {city}</span>

            <div className={styles.actions}>
              <button>View</button>
              <button onClick={() => removeCity(city)}>Remove</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default FavouriteSection;