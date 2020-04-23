import React, { useState, useEffect } from "react";

export default function Popularity({ updatePopularity }) {
  const [currentValue, setValue] = useState(50);
  function handleSubmit(event) {
    event.preventDefault();
    updatePopularity(currentValue);
  }
  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Popularity</h4>
      <input
        style={{
          backgroundColor: "black",
          borderTopColor: "#00000000",
          borderLeftColor: "#00000000",
          borderRightColor: "#00000000",
          color: "white",
        }}
        type="text"
        value={currentValue}
        onChange={handleChange}
      />

      <input
        style={{
          marginLeft: "10px",
          fontSize: "20px",
          background: "black",
          color: "white",
          borderColor: "black",
        }}
        type="submit"
        value="✓"
      />
    </form>
  );
}
