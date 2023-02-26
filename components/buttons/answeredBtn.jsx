import React from "react";
import styles from "./button.module.css";

const AnsweredBtn = ({ onClick }) => {
  return (
    <div className={styles.FilterWrapper}>
      <div onClick={onClick} className={styles.answeredBtn}>
        Answered
      </div>
    </div>
  );
};

export default AnsweredBtn;
