import React, { useState, useEffect } from "react";

import PlaylistItem from "./playlistItem";

//variant

export default function Playlist({ playlist, token }) {
  return (
    <div>
      {playlist ? (
        <div>
          {" "}
          {playlist.data.tracks.map((track) => {
            return <PlaylistItem track={track} />;
          })}
        </div>
      ) : (
        <iframe
          src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
          width="800"
          height="1000px"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      )}
    </div>
  );
}
