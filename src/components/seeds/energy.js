import React, { useState } from "react";
import { Slider } from "@material-ui/core";

export default function Energy({ updateEnergy }) {
  const [val, setValue] = useState(50);

  const handleChange = (name) => (e, value) => {
    console.log("vlaue", value);
    setValue(value);
    updateEnergy(value);
  };

  return (
    <div style={{ width: "80%" }}>
      <div stlye={{ margin: "0px" }}>
        Energy{" "}
        <span
          onClick={() => {
            window.alert(
              "Energy: Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy."
            );
          }}
        >
          ⓘ
        </span>
      </div>{" "}
      <Slider
        defaultValue={50}
        value={val}
        aria-label="E"
        aria-labelledby="label"
        onChange={handleChange("slider1")}
      />
    </div>
  );
}
