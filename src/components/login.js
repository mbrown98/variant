import React, { useState, useEffect } from "react";
import SpotifyLogin from "react-spotify-login";
import axios from "axios";
import { clientId, redirectUri } from "../settings";

export default function Login(props) {
  const [token, setToken] = useState(null);
  const onSuccess = (response) => {
    localStorage.setItem("spotifyAuthToken", response.access_token);
    // setToken("Bearer " + response.access_token);
  };
  const onFailure = (response) => console.error(response);
  return (
    <SpotifyLogin
      clientId={clientId}
      redirectUri={redirectUri}
      onSuccess={onSuccess}
      onFailure={onFailure}
    />
  );
}
