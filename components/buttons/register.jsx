import React from "react";
import styles from "./button.module.css";
import Router from "next/router";

const Register = ({ user }) => {
  function onClickHandler() {
    Router.push("/signUp");
  }

  return (
    <div>
      {!user && (
        <div onClick={onClickHandler} className={styles.main}>
          Sign Up
        </div>
      )}
    </div>
  );
};

export default Register;
