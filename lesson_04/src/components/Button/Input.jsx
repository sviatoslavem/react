import React from "react";

const Input = ({ type, name, value, checked, handleChange }) => {
  return (
    <label>
      <input
        type={type}
        value={value}
        name={name}
        checked={checked}
        onChange={handleChange}
      ></input>
      {value}
    </label>
  );
};

export default Input;
