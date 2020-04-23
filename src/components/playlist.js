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
        <div>Add some Songs</div>
      )}
    </div>
  );
}
