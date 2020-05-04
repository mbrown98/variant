import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Recent({
  token,
  setPlaylistId,
  getUserPlaylists,
  userPlaylists,
}) {
  useEffect(() => {
    getUserPlaylists();
  }, []);

  const [opacity, setOpacity] = useState(0);
  const [imageOpacity, setImageOpacity] = useState(1);

  function removePlaylist(playlistId) {
    axios
      .delete(`https://api.spotify.com/v1/playlists/${playlistId}/followers`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        // getRecentPlaylists();
        getUserPlaylists();
      });
  }

  return (
    <div
      style={{
        height: "100vh",
        overflow: "scroll",
        float: "right",
      }}
    >
      {userPlaylists ? (
        <div>
          {userPlaylists.map((playlist) => {
            return (
              <div
                className="container"
                style={{
                  position: "relative",
                  width: "80%",
                  marginBottom: "2vh",
                }}
                onMouseEnter={() => {
                  setOpacity(1);
                  setImageOpacity(0.5);
                }}
                onMouseLeave={() => {
                  setOpacity(0);
                  setImageOpacity(1);
                }}
              >
                <img
                  style={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                    opacity: imageOpacity,
                  }}
                  src={playlist.images[0] ? playlist.images[0].url : ""}
                  alt="playlistImage"
                  className="image"
                />
                <div
                  class="overlay"
                  style={{
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    height: "100%",
                    width: "100%",
                    opacity: opacity,

                    color: "white",
                  }}
                  onClick={() => {
                    setPlaylistId(playlist.id);
                  }}
                >
                  <div
                    class="text"
                    style={{ textAlign: "center", paddingTop: "2vh" }}
                  >
                    {playlist.name}
                  </div>
                  <div
                    class="text"
                    style={{ textAlign: "center", paddingTop: "20%" }}
                  >
                    {" "}
                    <img
                      alt="palylist"
                      onClick={() => {
                        removePlaylist(playlist.id);
                      }}
                      src={require("../trash.png")}
                      style={{ height: "20px" }}
                    ></img>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
