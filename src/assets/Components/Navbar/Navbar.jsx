import React from 'react'
import styles from "./Navbar.module.css"
import { useNavigate } from 'react-router-dom'
const Navbar = () => {

  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.navbar_container}>


        <div className={styles.logo_div}>🏨 Hotels</div>


        <div className={styles.buttons_div}>
            <div className={styles.btn}
            onClick={() => navigate("/")}
            >Home</div>
            <div className={styles.btn}
            onClick={ () => navigate("/hotelspage")}
            >Hotels</div>
            <div className={styles.btn}
            onClick={() => navigate("/bookedhotelspage")}
            >Booked Hotels</div>
            <div className={styles.btn}
            onClick={() => navigate("/about")}
            >About</div>
        </div>


        <div className={styles.login_div}>
            <div className={styles.btn}
             onClick={ () => navigate("/loginpage")}
            >Login</div>
            <div className={styles.btn}
             onClick={ () => navigate("/signuppage")}
            >Sign Up</div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
