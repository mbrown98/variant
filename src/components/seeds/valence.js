import React, { useState } from "react";
import { Slider } from "@material-ui/core";

export default function Valence({ updateValence }) {
  const [val, setValue] = useState(50);

  const handleChange = (name) => (e, value) => {
    setValue(value);
    updateValence(value);
  };

  return (
    <div style={{ width: "80%" }}>
      <div>
        Valence{" "}
        <span
          onClick={() => {
            window.alert(
              "Valence: A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry)."
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
