import React, { useState } from "react";
import styles from "./WeatherSection.module.css";

const WeatherSection = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city) return;

    try {
      setLoading(true);
      setError("");
      setWeather(null);

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`
      );

      if (!res.ok) {
        throw new Error("City not found");
      }

      const data = await res.json();
      setWeather(data);

    } catch (err) {
      setError(err.message);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>

      {/* SEARCH BOX */}
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={fetchWeather}>
          Search
        </button>
      </div>

      {/* LOADING */}
      {loading && (
        <div className={styles.loading}>
          <div className={styles.spinner}></div>
          <p>Loading weather...</p>
        </div>
      )}

      {/* ERROR */}
      {error && (
        <div className={styles.error}>
          ⚠️ {error}
        </div>
      )}

      {/* WEATHER DATA */}
      {weather && (
        <div className={styles.weatherCard}>
          <h2>{weather.name}</h2>

          <h1>{Math.round(weather.main.temp)}°C</h1>

          <p>{weather.weather[0].main}</p>

          <div className={styles.details}>
            <span>Humidity: {weather.main.humidity}%</span>
            <span>Wind: {weather.wind.speed} km/h</span>
          </div>
        </div>
      )}

    </div>
  );
};

export default WeatherSection;