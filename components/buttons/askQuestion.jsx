import React from "react";
import styles from "./button.module.css";
import Router from "next/router";

const AskQuestion = ({ user }) => {
  function onClickHandler() {
    Router.push("/questionForm");
  }

  return (
    <div className={styles.AskQuestion}>
      {user && (
        <div onClick={onClickHandler} className={styles.post}>
          Ask Question
        </div>
      )}
    </div>
  );
};

export default AskQuestion;
