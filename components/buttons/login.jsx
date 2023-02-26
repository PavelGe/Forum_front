import React from "react";
import styles from "./button.module.css";
import Router from "next/router";

const Login = ({ user }) => {
  function onClickHandler() {
    Router.push("/login");
  }

  function LogOutHandler() {
    localStorage.removeItem("user_jwt", "username");
    window.location.reload();
  }

  return (
    <div>
      {!user && (
        <div onClick={onClickHandler} className={styles.login}>
          Login
        </div>
      )}
      {user && (
        <div onClick={LogOutHandler} className={styles.login}>
          Log Out
        </div>
      )}
    </div>
  );
};

export default Login;
