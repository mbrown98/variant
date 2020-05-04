import React, { useState } from "react";
import { Slider } from "@material-ui/core";

export default function Popularity({ updatePopularity }) {
  const [val, setValue] = useState(50);

  const handleChange = (name) => (e, value) => {
    setValue(value);
    updatePopularity(value);
  };

  return (
    <div style={{ width: "80%" }}>
      <div>
        Popularity{" "}
        <span
          onClick={() => {
            window.alert(
              "In general the more a song is played the higher its popularity. The popularity rating is based on total number of plays compared to other tracks as well as how recent those plays are. "
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
