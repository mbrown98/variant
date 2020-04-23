import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Playlist({
  playlist,
  token,
  playlistId,
  currentlyPlaying,
}) {
  // useEffect(
  //   () => {
  //     removePlaylist(playlistId);
  //   },
  //   [] //useEffect will run only one time
  //   //if you pass a value to array, like this [data] than clearTimeout will run every time this value changes (useEffect re-run)
  // );

  function removePlaylist(playlistId) {
    axios
      .delete(`https://api.spotify.com/v1/playlists/${playlistId}/followers`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        console.log("deleted", response);
      });
  }

  return (
    <div style={{ height: "100vh" }}>
      {playlistId ? (
        <div style={{ overflow: "scroll", height: "100vh" }}>
          <iframe
            src={`https://open.spotify.com/embed/playlist/${playlistId}`}
            width="100%"
            height="100%"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
          <p
            onClick={() => {
              removePlaylist(playlistId);
            }}
          >
            Delete
          </p>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
