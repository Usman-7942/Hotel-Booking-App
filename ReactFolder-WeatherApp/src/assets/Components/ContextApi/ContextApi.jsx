import { createContext, useState, useEffect } from "react";

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  // 🌙 Toggle Dark Mode
  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // 🌍 Fetch Weather
  const fetchWeather = async (city) => {
    if (!city) return;

    try {
      setLoading(true);
      setError("");

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
      setWeather(null);

    } finally {
      setLoading(false);
    }
  };

  // 💾 Save dark mode preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <WeatherContext.Provider
      value={{
        weather,
        loading,
        error,
        fetchWeather,

        darkMode,
        toggleDarkMode
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};