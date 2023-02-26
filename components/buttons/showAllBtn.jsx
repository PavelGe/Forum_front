import React from "react";
import styles from "./button.module.css";

const ShowAllBtn = ({ onClick }) => {
  return (
    <div className={styles.FilterWrapper}>
      <div onClick={onClick} className={styles.allQuestions}>
        Show All
      </div>
    </div>
  );
};

export default ShowAllBtn;
