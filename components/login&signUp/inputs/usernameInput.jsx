import React from "react";

const UsernameInput = ({ value, onChange }) => {
  return (
    <div>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        type="text"
        placeholder="username"
      />
    </div>
  );
};

export default UsernameInput;
