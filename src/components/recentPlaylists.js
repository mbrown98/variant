import React, { useEffect } from "react";
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

  // function getRecentPlaylists() {
  //   axios
  //     .get("https://api.spotify.com/v1/me/playlists?limit=20", {
  //       headers: { Authorization: "Bearer " + token },
  //     })
  //     .then((response) => {
  //       console.log(response.data.items);
  //       setRecentPlaylists(response.data.items);
  //     });
  // }

  function removePlaylist(playlistId) {
    axios
      .delete(`https://api.spotify.com/v1/playlists/${playlistId}/followers`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        console.log("deleted", response);
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

                <span style={{ paddingLeft: "2rem" }}>
                  {" "}
                  <div style={{ width: "80%" }}>
                    {playlist.name}{" "}
                    <span>
                      {" "}
                      <img
                        alt="palylist"
                        onClick={() => {
                          removePlaylist(playlist.id);
                        }}
                        src={require("../trash.png")}
                        style={{ height: "20px" }}
                      ></img>
                    </span>
                  </div>{" "}
                </span>
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
