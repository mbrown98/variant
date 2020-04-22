import React, { useState, useEffect } from "react";

import axios from "axios";

import Playlist from "./playlist";

export default function Home({ token }) {
  return (
    <div>
      <Playlist token={token} />
    </div>
  );
}
