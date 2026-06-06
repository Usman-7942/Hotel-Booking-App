import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./OrderSection.module.css"
const OrderSection = () => {

  const naviagte = useNavigate();


  return (
    <div>
      <div className={styles.container}>
              <p>Ready to Order Your Favorite Pizza? <span>🍕</span> </p>
              <p>Fresh, Hot and Delivered in minutes!</p>
              <button
              onClick={() => naviagte("/menu")}
              >Order Now</button>
            </div>
    </div>
  )
}

export default OrderSection
