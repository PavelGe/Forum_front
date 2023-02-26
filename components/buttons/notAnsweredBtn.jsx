import React from "react";
import styles from "./button.module.css";

const NotAnsweredBtn = ({ onClick }) => {
  return (
    <div className={styles.FilterWrapper}>
      <div onClick={onClick} className={styles.notAnsweredBtn}>
        Unanswered
      </div>
    </div>
  );
};

export default NotAnsweredBtn;
