import React, { useState, useEffect } from "react";
import ReactBootstrapSlider from "react-bootstrap-slider";

export default function Danceability({ updateDance }) {
  const [currentValue, setValue] = useState(50);
  function handleSubmit(event) {
    event.preventDefault();
    updateDance(currentValue);
  }
  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Danceability</h4>
      <input type="text" value={currentValue} onChange={handleChange} />

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
