import React, { useState } from "react";

// import API from "../api/api";
import axios from "axios";

export default function UserInputs({ token, updateArtists, artistInfo }) {
  const [currentValue, setValue] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    console.log("val", currentValue);
    axios
      .get(`https://api.spotify.com/v1/search?q=${currentValue}&type=artist`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.artists.items[0]) {
          let artistInfo = response.data;
          setValue("");
          updateArtists(artistInfo);
        } else {
          setValue("");
        }
      });
  }
  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <form style={{ marginTop: "5px" }} onSubmit={handleSubmit}>
      <input
        style={{
          backgroundColor: "black",
          borderTopColor: "#00000000",
          borderLeftColor: "#00000000",
          borderRightColor: "#00000000",
          color: "white",
        }}
        type="text"
        value={currentValue}
        placeholder={"artist"}
        onChange={handleChange}
      />

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
