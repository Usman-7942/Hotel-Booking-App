import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";

const Signup = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
  let valid = true;

  setEmailError("");
  setPassError("");

  const trimmedEmail = email.trim();
  const trimmedPassword = password.trim();

  // REQUIRED CHECK
  if (!trimmedEmail) {
    setEmailError("Email is required");
    valid = false;
  }

  if (!trimmedPassword) {
    setPassError("Password is required");
    valid = false;
  }

  // EMAIL FORMAT
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (trimmedEmail && !emailRegex.test(trimmedEmail)) {
    setEmailError("Enter a valid email");
    valid = false;
  }

  // PASSWORD LENGTH
  if (trimmedPassword && trimmedPassword.length < 6) {
    setPassError("Min 6 characters required");
    valid = false;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const exists = users.find(
    (u) => u.email.toLowerCase() === trimmedEmail.toLowerCase()
  );

  if (exists) {
    setEmailError("Email already exists");
    valid = false;
  }

  if (!valid) return;

  const newUser = {
    email: trimmedEmail,
    password: trimmedPassword,
    cart: [],
    orders: []
  };

  users.push(newUser);
  localStorage.setItem("users", JSON.stringify(users));

  // ⭐ IMPORTANT
  localStorage.setItem("currentUser", JSON.stringify(newUser));

  setEmail("");
  setPassword("");

  navigate("/login");
};

  return (
    <div className={styles.auth_page}>
      <div className={styles.glass_card}>
        <h2>Sign Up 🍕</h2>

        {/* EMAIL */}
        <div className={styles.input_group}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <span className={styles.error}>{emailError}</span>}
        </div>

        {/* PASSWORD */}
        <div className={styles.input_group}>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passError && <span className={styles.error}>{passError}</span>}
        </div>

        <button onClick={handleSignup}>Create Account</button>

        <p onClick={() => navigate("/login")}>
          Already have account? Login
        </p>
      </div>
    </div>
  );
};

export default Signup;