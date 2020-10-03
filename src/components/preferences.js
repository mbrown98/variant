import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "./title";
import AddArtist from "./addArtist";
import Danceability from "./seeds/danceability";
import Popularity from "./seeds/popularity";
import Acousticness from "./seeds/acousticness";
import SongCount from "./seeds/songCount";
import Tempo from "./seeds/tempo";
import Energy from "./seeds/energy";
import Valence from "./seeds/valence";
import Button from "react-bootstrap/Button";

export default function Preferences({
  token,
  newPlaylist,
  userId,
  setPlaylistId,
  changeColor,
  getUserPlaylists,
  expiresAt,
}) {
  const [artistIds, setArtistIds] = useState([]);
  const [artistInfo, updateArtistInfo] = useState([]);
  const [dance, setDance] = useState(50);
  const [popularity, setPopularity] = useState(50);
  const [acoust, setAcoust] = useState(50);
  const [count, setCount] = useState(25);
  const [valence, setValence] = useState(50);
  const [tempo, setTempo] = useState(50);
  const [energy, setEnergy] = useState(50);

  function clearInputs() {
    setArtistIds([]);
    updateArtistInfo([]);
  }

  useEffect(() => {}, [artistIds]);

  function updateArtists(data) {
    let artistObj = {};
    artistObj.id = data.artists.items[0].id;
    artistObj.name = data.artists.items[0].name;
    artistObj.image = data.artists.items[0].images;
    artistObj.popularity = data.artists.items[0].popularity;
    let newArtistInfo = artistInfo.slice(0);

    newArtistInfo.push(artistObj);
    updateArtistInfo(newArtistInfo);
    let newArtistIds = artistIds.slice(0);
    setArtistIds(null);
    newArtistIds.push(artistObj.id);
    setArtistIds(newArtistIds);
  }

  function getPlaylist(
    artistIds,
    dance,
    acoust,
    popularity,
    count,
    valence,
    tempo,
    energy
  ) {
    let uriList = [];
    const artists = artistIds.toString();

    let artistNames = artistInfo.map((artist) => {
      return artist.name;
    });
    let personalId = null;

    axios
      .get("https://api.spotify.com/v1/me", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        personalId = response.data.id;
        return axios.get(
          `https://api.spotify.com/v1/recommendations?limit=${count}&market=US&seed_artists=${artists}&target_acousticness=${acoust}&target_valence=${valence}&target_tempo=${tempo}&target_energy=${energy}&target_danceability=${dance}&target_popularity=${popularity}`,
          { headers: { Authorization: "Bearer " + token } }
        );
      })

      .then((response) => {
        uriList = response.data.tracks.map((track) => {
          return track.uri;
        });
     
        newPlaylist(response);
        return axios.post(
          `https://api.spotify.com/v1/users/${personalId}/playlists`,
          {
            name: `${artistNames}`,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );
      })
      .then((response) => {
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
      })
      .then((response) => {
        getUserPlaylists();
      });
  }

  function updateDance(val) {
    setDance(val);
  }
  function updateAcoust(val) {
    setAcoust(val);
  }

  function updatePopularity(val) {
    setPopularity(val);
  }
  function updateCount(val) {
    setCount(val);
  }

  function updateTempo(val) {
    setTempo(val);
  }

  function updateEnergy(val) {
    setEnergy(val);
  }

  function updateValence(val) {
    setValence(val);
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
          height: "18%",
        }}
      >
        <Title changeColor={changeColor} expiresAt={expiresAt} />
      </div>
      <div
        style={{
          width: "100%",
          height: "80%",
        }}
      >
        {/* selected artists */}

        <div
          style={{
            height: "20%",
            width: "100%",
          }}
        >
          {artistInfo &&
            artistInfo.map((artist) => {
              return (
                <span>
                  {/* {artist.name} */}
                  {"        "}
                  <img
                    alt="artist"
                    src={artist.image[0].url}
                    style={{ height: "8vh" }}
                  />
                </span>
              );
            })}{" "}
          {artistInfo.length < 5 && (
            <AddArtist
              token={token}
              updateArtists={updateArtists}
              artistInfo={artistInfo}
            />
          )}
        </div>
        <div
          style={{
            height: "8%",
          }}
        >
          {" "}
          <Popularity updatePopularity={updatePopularity} />
        </div>
        <div
          style={{
            height: "8%",
          }}
        >
          {" "}
          <Energy updateEnergy={updateEnergy} />
        </div>
        <div
          style={{
            height: "8%",
          }}
        >
          {" "}
          <Valence updateValence={updateValence} />
        </div>
        <div
          style={{
            height: "8%",
          }}
        >
          {" "}
          <Danceability updateDance={updateDance} />
        </div>

        <div
          style={{
            height: "8%",
          }}
        >
          {" "}
          <Acousticness updateAcoust={updateAcoust} />
        </div>
        <div
          style={{
            height: "8%",
          }}
        >
          {" "}
          <Tempo updateTempo={updateTempo} />
        </div>

        <div
          style={{
            height: "10%",
            marginTop: "2%",
            marginBottom: "4%",
          }}
        >
          {" "}
          <SongCount updateCount={updateCount} />
        </div>
        <div style={{ height: "22%", width: "100%" }}>
          {" "}
          <Button
            variant="outline-success"
            onClick={() => {
              getPlaylist(
                artistIds,
                dance,
                acoust,
                popularity,
                count,
                valence,
                tempo,
                energy
              );
            }}
          >
            Generate Playlist
          </Button>{" "}
          <Button
            variant="outline-danger"
            onClick={() => {
              clearInputs();
            }}
            style={{ marginLeft: "10%" }}
          >
            Clear Inputs
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}
