import React, { useState } from "react";
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
      <div>
        Danceability{" "}
        <span
          onClick={() => {
            window.alert(
              "Describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable."
            );
          }}
        >
          ⓘ
        </span>
      </div>{" "}
      <Slider
        defaultValue={50}
        value={val}
        aria-labelledby="label"
        onChange={handleChange("slider1")}
      />
    </div>
  );
}
