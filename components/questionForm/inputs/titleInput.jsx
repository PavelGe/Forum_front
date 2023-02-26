import React from "react";
import styles from "./inputs.module.css";

const TitleInput = ({ value, onChange }) => {
  return (
    <div>
      <input
        className={styles.title}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        type="text"
        placeholder="Title"
      />
    </div>
  );
};

export default TitleInput;
