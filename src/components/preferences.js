import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "./title";
import AddArtist from "./addArtist";

export default function Preferences({ token }) {
  const [artistIds, setArtistIds] = useState([]);

  function updateArtists(newId) {
    console.log("called");
    console.log(artistIds);
    let newArtistIds = artistIds;
    newArtistIds.push(newId);
    console.log("new", newArtistIds);
    setArtistIds(newArtistIds);
  }

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "15%",
          backgroundColor: "blue",
        }}
      >
        <Title />
      </div>
      <div
        style={{
          width: "100%",
          height: "85%",
          backgroundColor: "white",
        }}
      >
        <AddArtist token={token} updateArtists={updateArtists} />
        <p
          onClick={() => {
            console.log(artistIds);
          }}
        >
          Search
        </p>
      </div>
    </div>
  );
}
