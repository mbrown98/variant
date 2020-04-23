import React, { useState, useEffect } from "react";
import { Slider } from "@material-ui/core";

export default function Tempo({ updateTempo }) {
  const [val, setValue] = useState(50);

  const handleChange = (name) => (e, value) => {
    console.log("vlaue", value);
    setValue(value);
    updateTempo(value);
  };

  return (
    <div style={{ width: "80%" }}>
      <div>
        Tempo{" "}
        <span
          onClick={() => {
            window.alert(
              "Tempo: The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration."
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
