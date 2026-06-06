import React from "react";
import { useNavigate } from "react-router-dom";

import { MdContactEmergency } from "react-icons/md";
import { IoMdInformationCircle } from "react-icons/io";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoHome } from "react-icons/io5";
import { IoIosLogIn } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  // ✅ FIX 1: define login state
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // ✅ logout function
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <nav>

      {/* Logo */}
      <div className={styles.logo}>Logo</div>

      {/* Buttons */}
      <div className={styles.btns}>

        <button className={styles.btn} onClick={() => navigate("/")}>
          <IoHome /> Home
        </button>

        <button className={styles.btn} onClick={() => navigate("/menu")}>
          <IoMenu /> Menu
        </button>

        <button className={styles.btn} onClick={() => navigate("/deals")}>
          <FaHandshake /> Deals
        </button>

        <button className={styles.btn} onClick={() => navigate("/orders")}>
          <MdFormatListBulletedAdd /> Orders
        </button>

        <button className={styles.btn} onClick={() => navigate("/about")}>
          <IoMdInformationCircle /> About
        </button>

        <button className={styles.btn} onClick={() => navigate("/contact")}>
          <MdContactEmergency /> Contact
        </button>

        <button className={styles.btn} onClick={() => navigate("/search")}>
          <CiSearch />
        </button>

      </div>

      {/* Cart + Login */}
      <div className={styles.logindiv}>

        <button className={styles.cart} onClick={() => navigate("/cart")}>
          <CiShoppingCart /> Cart
        </button>

        {isLoggedIn ? (
          <button className={styles.login} onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <button className={styles.login} onClick={() => navigate("/login")}>
            <IoIosLogIn /> Login
          </button>
        )}

      </div>

    </nav>
  );
};

export default Navbar;