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
      <input type="text" value={currentValue} onChange={handleChange} />

      <input type="submit" value="Popu" />
    </form>
  );
}
