import React, { useState, useEffect } from "react";

export default function PlaylistItem({ track }) {
  let artist = track.artists[0].name;
  let artistId = track.artists[0].id;
  let trackName = track.name;
  let trackId = track.id;
  let albumName = track.album.name;
  return (
    <div>{`Track: ${trackName}, Artist:${artist}, Album:${albumName}`}</div>
  );
}
