import React from "react";

const ColorPicker = ({ color, setColor }) => {
  return (
    <input
      type="color"
      defaultValue={color}
      onChange={(e) => setColor(e.target.value)}
    />
  );
};

export default ColorPicker;
