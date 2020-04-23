import React, { useState, useEffect } from "react";
import { Slider } from "@material-ui/core";

export default function Popularity({ updateDance }) {
  const [val, setValue] = useState(50);

  const handleChange = (name) => (e, value) => {
    console.log("vlaue", value);
    setValue(value);
    updateDance(value);
  };

  return (
    <div style={{ width: "80%" }}>
      <p>Popularity</p>{" "}
      <Slider
        defaultValue={50}
        value={val}
        aria-labelledby="label"
        onChange={handleChange("slider1")}
      />
    </div>
  );
}
