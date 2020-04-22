import React, { useState, useEffect } from "react";

export default function Acousticness({ updateAcoust }) {
  const [currentValue, setValue] = useState(50);
  function handleSubmit(event) {
    event.preventDefault();
    updateAcoust(currentValue);
  }
  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={currentValue} onChange={handleChange} />

      <input type="submit" value="Acoust" />
    </form>
  );
}
