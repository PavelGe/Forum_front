import React from "react";

const PasswordInput = ({ value, onChange }) => {
  return (
    <div>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        type="password"
        placeholder="password"
      />
    </div>
  );
};

export default PasswordInput;
