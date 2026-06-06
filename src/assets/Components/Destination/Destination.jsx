import React from "react";
import styles from "./Destination.module.css";

const destinations = [
  {
    id: 1,
    name: "Lahore",
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Paris",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Tokyo",
    image: "https://images.unsplash.com/photo-1505066836043-7b1c9a3c1f2f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Karachi",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "London",
    image: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=800&q=80"
  }
];

const Destination = () => {
  return (
    <div className={styles.section}>
      <h2>🌍 Popular Destinations</h2>
      <p>Explore top travel cities around the world</p>

      <div className={styles.grid}>
        {destinations.map((city) => (
          <div key={city.id} className={styles.card}>
            <img src={city.image} alt={city.name} />
            <div className={styles.overlay}>
              <h3>{city.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destination;