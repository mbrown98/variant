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
      <input type="text" value={currentValue} onChange={handleChange} />

      <input type="submit" value="Count" />
    </form>
  );
}
