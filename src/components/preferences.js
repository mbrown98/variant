import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "./title";
import AddArtist from "./addArtist";
import Danceability from "./seeds/danceability";
import Popularity from "./seeds/popularity";
import Acousticness from "./seeds/acousticness";
import SongCount from "./seeds/songCount";

export default function Preferences({ token }) {
  const [artistIds, setArtistIds] = useState([]);
  const [dance, setDance] = useState(null);
  const [popularity, setPopularity] = useState(null);
  const [acoust, setAcoust] = useState(null);
  const [count, setCount] = useState(null);

  function updateArtists(newId) {
    console.log("called");
    console.log(artistIds);
    let newArtistIds = artistIds;
    newArtistIds.push(newId);
    console.log("new", newArtistIds);
    setArtistIds(newArtistIds);
  }

  function updateDance(val) {
    console.log("danceVal", val);
    setDance(val);
  }
  function updateAcoust(val) {
    // console.log("danceVal", val);
    setAcoust(val);
  }

  function updatePopularity(val) {
    // console.log("danceVal", val);
    setPopularity(val);
  }
  function updateCount(val) {
    // console.log("danceVal", val);
    setCount(val);
  }

  function getPlaylist(artistIds, dance, acoust, popularity, count) {
    const artists = "hello";
    axios
      .get(
        `https://api.spotify.com/v1/recommendations?limit=${count}&market=US&seed_artists=${artists}&target_acousticness=${acoust}&target_danceability=${dance}&target_popularity=${popularity}`,
        { headers: { Authorization: "Bearer " + token } }
      )
      .then((response) => {
        console.log("response", response);
      });
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
        {/* selected artists */}
        <AddArtist token={token} updateArtists={updateArtists} />
        <Danceability updateDance={updateDance} />
        <Popularity updatePopularity={updatePopularity} />
        <Acousticness updateAcoust={updateAcoust} />
        <SongCount updateCount={updateCount} />
        <p
          onClick={() => {
            console.log(
              "all vals",
              artistIds,
              dance,
              acoust,
              popularity,
              count
            );
            getPlaylist(artistIds, dance, acoust, popularity, count);
          }}
        >
          Search
        </p>
      </div>
    </div>
  );
}
