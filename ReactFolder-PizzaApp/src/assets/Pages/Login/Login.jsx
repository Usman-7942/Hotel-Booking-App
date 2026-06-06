import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
      setMessage("Invalid Credentials ❌");
      setIsError(true);
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(foundUser));
    localStorage.setItem("isLoggedIn", "true");

    setMessage("Login Successful ✅");
    setIsError(false);

    setTimeout(() => {
      navigate("/");
    }, 800);
  };

  return (
    <div className={styles.auth_page}>
      <div className={styles.glass_card}>
        <h2>Login 🍕</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* MESSAGE */}
        {message && (
          <p
            style={{
              color: isError ? "#ff4d4d" : "#00ff99",
              fontWeight: "bold",
              marginBottom: "10px",
              fontSize: "14px",
            }}
          >
            {message}
          </p>
        )}

        <button onClick={handleLogin}>Login</button>

        <p onClick={() => navigate("/signup")}>
          Don't have account? Sign Up
        </p>
      </div>
    </div>
  );
};

export default Login;