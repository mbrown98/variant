import React, { useState } from "react";
import { Slider } from "@material-ui/core";

export default function Popularity({ updateAcoust }) {
  const [val, setValue] = useState(50);

  const handleChange = (name) => (e, value) => {
    console.log("vlaue", value);
    setValue(value);
    updateAcoust(value);
  };

  return (
    <div style={{ width: "80%" }}>
      <div>
        Acousticness{" "}
        <span
          onClick={() => {
            window.alert(
              "A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic."
            );
          }}
        >
          ⓘ
        </span>
      </div>
      <Slider
        defaultValue={50}
        value={val}
        aria-labelledby="label"
        onChange={handleChange("slider1")}
      />
    </div>
  );
}
