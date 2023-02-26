import React from "react";
import styles from "./navbar.module.css";
import Login from "../buttons/login";
import Register from "../buttons/register";
import AskQuestion from "../buttons/askQuestion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState();

  useEffect(() => {
    const token = localStorage.getItem("user_jwt");
    const username = localStorage.getItem("username");
    function checkUser() {
      if (token) {
        setIsLoggedIn(true);
        setUsername(username);
      }
    }
    checkUser();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.AskQuestion}>
        <AskQuestion user={isLoggedIn} />
      </div>
      <div className={styles.userWrapper}>
        <Register user={isLoggedIn} />
        <Login user={isLoggedIn} />
        {isLoggedIn && <div className={styles.user}>{username}</div>}
      </div>
    </div>
  );
};

export default Navbar;
