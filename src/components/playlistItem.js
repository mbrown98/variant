import React, { useState, useEffect } from "react";

export default function PlaylistItem({ track }) {
  return <div>{track.name}</div>;
}
