import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "./title";
import AddArtist from "./addArtist";
import Danceability from "./seeds/danceability";
import Popularity from "./seeds/popularity";
import Acousticness from "./seeds/acousticness";
import SongCount from "./seeds/songCount";

export default function Preferences({
  token,
  newPlaylist,
  userId,
  setPlaylistId,
}) {
  const [artistIds, setArtistIds] = useState([]);
  const [artistInfo, updateArtistInfo] = useState([]);
  const [dance, setDance] = useState(50);
  const [popularity, setPopularity] = useState(50);
  const [acoust, setAcoust] = useState(50);
  const [count, setCount] = useState(15);

  useEffect(() => {}, [artistIds]);

  function updateArtists(data) {
    console.log("data", data);
    let artistObj = {};
    artistObj.id = data.artists.items[0].id;
    artistObj.name = data.artists.items[0].name;
    artistObj.image = data.artists.items[0].images;
    artistObj.popularity = data.artists.items[0].popularity;
    let newArtistInfo = artistInfo.slice(0);
    updateArtistInfo(null);
    newArtistInfo.push(artistObj);
    updateArtistInfo(newArtistInfo);
    let newArtistIds = artistIds.slice(0);
    setArtistIds(null);
    newArtistIds.push(artistObj.id);
    setArtistIds(newArtistIds);
  }

  function getPlaylist(artistIds, dance, acoust, popularity, count) {
    let uriList = [];
    const artists = artistIds.toString();
    console.log("art", artists);
    axios
      .get(
        `https://api.spotify.com/v1/recommendations?limit=${count}&market=US&seed_artists=${artists}&target_acousticness=${acoust}&target_danceability=${dance}&target_popularity=${popularity}`,
        { headers: { Authorization: "Bearer " + token } }
      )
      .then((response) => {
        uriList = response.data.tracks.map((track) => {
          return track.uri;
        });
        console.log("response", response);
        newPlaylist(response);
        return axios.post(
          `https://api.spotify.com/v1/users/${userId}/playlists`,
          {
            name: "Test Playlist",
          },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
      })
      .then((response) => {
        console.log(response);
        console.log("URRRIISS", uriList);
        let playlist_id = response.data.id;
        setPlaylistId(playlist_id);
        let uris = uriList.toString();

        return axios.post(
          `https://api.spotify.com/v1/playlists/${playlist_id}/tracks?uris=${uris}`,
          {
            name: "First Playlist",
          },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
      });
  }

  function updateDance(val) {
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
          height: "20%",
        }}
      >
        <Title />
      </div>
      <div
        style={{
          width: "100%",
          height: "80%",
        }}
      >
        {/* selected artists */}
        {artistInfo &&
          artistInfo.map((artist) => {
            return <div>{artist.name}</div>;
          })}
        <div
          style={{
            height: "15%",
          }}
        >
          {" "}
          <AddArtist token={token} updateArtists={updateArtists} />
        </div>
        <div
          style={{
            height: "15%",
          }}
        >
          {" "}
          <Danceability updateDance={updateDance} />
        </div>
        <div
          style={{
            height: "15%",
          }}
        >
          {" "}
          <Popularity updatePopularity={updatePopularity} />
        </div>
        <div
          style={{
            height: "15%",
          }}
        >
          {" "}
          <Acousticness updateAcoust={updateAcoust} />
        </div>
        <div
          style={{
            height: "15%",
          }}
        >
          {" "}
          <SongCount updateCount={updateCount} />
        </div>

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
