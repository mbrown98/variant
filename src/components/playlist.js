import React from "react";
// import axios from "axios";

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
        <div style={{ height: "100vh" }}>
          <iframe
            title="playlist"
            src={`https://open.spotify.com/embed/playlist/${playlistId}`}
            width="100%"
            height="100%"
            frameborder="0"
            allowtransparency="true"
            allow="encrypted-media"
          ></iframe>
        </div>
      ) : (
        <div style={{ height: "100vh" }}>
          <div
            style={{
              paddingTop: "10%",
              fontSize: "100%",
              textAlign: "center",
            }}
          >
            <div style={{ paddingTop: "3%" }}>
              1. Enter An Artist and Press +
            </div>
            <div style={{ paddingTop: "3%" }}>2. Enter Up to Five Artists</div>
            <div style={{ paddingTop: "3%" }}>
              3. Set Preferred Levels for Musical Inputs
            </div>
            <div style={{ paddingTop: "3%" }}> 4. Generate</div>

            <div style={{ paddingTop: "3%" }}>5. Enjoy a Variant Playlist</div>
            <div style={{ paddingTop: "3%", fontSize: "100%" }}>
              (Variant provides you with a playlist that includes your chosen
              artists and other recommended artists based on your inputs)
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
