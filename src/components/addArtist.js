import React, { useState, useEffect } from "react";

// import API from "../api/api";
import axios from "axios";

export default function UserInputs({ token, updateArtists }) {
  const [currentValue, setValue] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    console.log("val", currentValue);
    axios
      .get(`https://api.spotify.com/v1/search?q=${currentValue}&type=artist`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        let artistInfo = response.data;
        setValue("");
        updateArtists(artistInfo);
      });
  }
  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4>Add Artist</h4>
      <input type="text" value={currentValue} onChange={handleChange} />

      <input
        style={{
          marginLeft: "10px",
          fontSize: "20px",
          background: "black",
          color: "white",
          borderColor: "black",
        }}
        type="submit"
        value="+"
      />
    </form>
  );
}
