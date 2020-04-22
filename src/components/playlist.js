import React, { useState, useEffect } from "react";

import axios from "axios";

import PlaylistItem from "./playlistItem";

//variant

export default function Playlist({ token }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.spotify.com/v1/recommendations?limit=10&market=ES&seed_artists=3TVXtAsR1Inumwj472S9r4&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA",
        { headers: { Authorization: "Bearer " + token } }
      )
      .then((response) => {
        console.log("response", response.data.tracks);
        setData(response.data);
      });
  }, []);

  return (
    <div>
      {data &&
        data.tracks.map((track) => {
          return <PlaylistItem track={track} />;
        })}
    </div>
  );
}
