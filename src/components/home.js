import React, { useState, useEffect } from "react";

import axios from "axios";

import Playlist from "./playlist";
import Preferences from "./preferences";

import RecentPlaylists from "./recentPlaylists";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home({ token, userId, changeColor, expiresAt }) {
  const [playlist, setPlaylist] = useState(null);
  const [playlistId, updatePlaylistId] = useState(null);
  const [userPlaylists, updateUserPlaylists] = useState(null);

  function newPlaylist(data) {
  
    setPlaylist(data);
  }

  function setPlaylistId(val) {
    updatePlaylistId(null);
    updatePlaylistId(val);
  }

  function getUserPlaylists() {
    axios
      .get("https://api.spotify.com/v1/me/playlists?limit=20", {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
     
        updateUserPlaylists(response.data.items);
      });
  }

  useEffect(() => {}, [playlist]);

  return (
    <Container
      style={{
        paddingLeft: 0,
        paddingRight: 0,
        marginLeft: 0,
        marginRight: 0,
        height: "100vh",
        float: "left",
        maxWidth: "100%",
      }}
    >
      <Row
        style={{
          paddingLeft: 0,
          paddingRight: 0,
          marginLeft: 0,
          marginRight: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Col md={3} style={{}}>
          <Preferences
            changeColor={changeColor}
            token={token}
            newPlaylist={newPlaylist}
            userId={userId}
            setPlaylistId={setPlaylistId}
            getUserPlaylists={getUserPlaylists}
            expiresAt={expiresAt}
          />
        </Col>
        <Col md={7} style={{}}>
          <Playlist
            token={token}
            playlist={playlist}
            userId={userId}
            playlistId={playlistId}
            setPlaylistId={setPlaylistId}
          />
        </Col>
        <Col md={2} style={{}}>
          <RecentPlaylists
            token={token}
            setPlaylistId={setPlaylistId}
            userPlaylists={userPlaylists}
            getUserPlaylists={getUserPlaylists}
          />
        </Col>
      </Row>
    </Container>
  );
}

// <Preferences />
//
//
