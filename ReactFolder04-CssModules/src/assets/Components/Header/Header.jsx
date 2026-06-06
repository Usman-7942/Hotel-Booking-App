import React from 'react';
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.header}>
      <h3>Ali</h3>
      <button className={`${styles.btn}  ${styles.logo}`}>Login</button>
      //applying two css style on the same element
    </div>
  )
}

export default Header;
