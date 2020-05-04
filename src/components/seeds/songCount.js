import React, { useState } from "react";
import { Slider } from "@material-ui/core";

export default function Popularity({ updateCount }) {
  const [val, setValue] = useState(25);

  const handleChange = (name) => (e, value) => {
    setValue(value);
    updateCount(value);
  };
  function valuetext(value) {
    return `${value}`;
  }
  const marks = [
    {
      value: 5,
      label: "5",
    },
    {
      value: 10,
      label: "10",
    },
    {
      value: 20,
      label: "20",
    },
    {
      value: 25,
      label: "25",
    },
    {
      value: 30,
      label: "30",
    },
    {
      value: 35,
      label: "35",
    },
    {
      value: 40,
      label: "40",
    },
    {
      value: 45,
      label: "45",
    },
    {
      value: 50,
      label: "50",
    },
  ];
  return (
    <div style={{ width: "80%" }}>
      <div>Song Count</div>{" "}
      <Slider
        defaultValue={25}
        value={val}
        aria-labelledby="label"
        getAriaValueText={valuetext}
        onChange={handleChange("slider1")}
        step={5}
        marks={marks}
        min={0}
        max={50}
        valueLabelDisplay="auto"
      />
    </div>
  );
}

// /import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Slider from '@material-ui/core/Slider';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: 300,
//   },
//   margin: {
//     height: theme.spacing(3),
//   },
// }));

// const marks = [
//   {
//     value: 0,
//     label: '0°C',
//   },
//   {
//     value: 20,
//     label: '20°C',
//   },
//   {
//     value: 37,
//     label: '37°C',
//   },
//   {
//     value: 100,
//     label: '100°C',
//   },
// ];

// function valuetext(value) {
//   return `${value}°C`;
// }

// export default function DiscreteSlider() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Typography id="discrete-slider-custom" gutterBottom>
//         Custom marks
//       </Typography>
//       <Slider
//         defaultValue={20}
//         getAriaValueText={valuetext}
//         aria-labelledby="discrete-slider-custom"
//         step={10}
//         valueLabelDisplay="auto"
//         marks={marks}
//       />
//     </div>
//   );
// }
