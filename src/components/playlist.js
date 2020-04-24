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
        </div>
      ) : (
        <div
          style={{ paddingTop: "10vh", fontSize: "5vh", textAlign: "center" }}
        >
          <div style={{ paddingTop: "3vh" }}>1. Enter Up To Five Artists</div>
          <div style={{ paddingTop: "3vh" }}>
            2. Set Preferred Levels for Musical Inputs
          </div>
          <div style={{ paddingTop: "3vh" }}> 3. Generate</div>

          <div style={{ paddingTop: "3vh" }}>4. Enjoy a Variant Playlist</div>
        </div>
      )}
    </div>
  );
}
