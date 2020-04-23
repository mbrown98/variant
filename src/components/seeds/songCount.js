import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function SongCount({ updateCount }) {
  const [currentValue, setValue] = useState(10);
  function handleSubmit(event) {
    event.preventDefault();
    updateCount(currentValue);
  }
  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Song Count</h4>
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
