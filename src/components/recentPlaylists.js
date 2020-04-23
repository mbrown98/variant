import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Recent({ token, setPlaylistId }) {
  const [playlist, setRecentPlaylists] = useState(null);
  useEffect(() => {
    getRecentPlaylists();
  }, []);

  function getRecentPlaylists() {
    axios
      .get("https://api.spotify.com/v1/me/playlists?limit=20", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        console.log(response.data.items);
        setRecentPlaylists(response.data.items);
      });
  }

  return (
    <div style={{ height: "100vh", overflow: "scroll" }}>
      {playlist ? (
        <div>
          {playlist.map((playlist) => {
            return (
              <div style={{ marginBottom: "20px" }}>
                <img
                  onClick={() => {
                    setPlaylistId(playlist.id);
                  }}
                  style={{ height: "100px" }}
                  src={playlist.images[0] ? playlist.images[0].url : ""}
                  alt="playlistImage"
                  // className="img-responsive"
                />
                {playlist.name}
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
