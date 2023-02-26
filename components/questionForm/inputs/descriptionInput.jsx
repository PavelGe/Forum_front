import React from "react";
import styles from "./inputs.module.css";

const DescriptionInput = ({ value, onChange }) => {
  return (
    <div>
      <textarea
        className={styles.description}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        type="text"
        placeholder="Description"
      />
    </div>
  );
};

export default DescriptionInput;
