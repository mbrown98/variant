import React, { useState, useEffect } from "react";

import axios from "axios";

import Playlist from "./playlist";
import Preferences from "./preferences";
import Recommendations from "./recommendations";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Home({ token }) {
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
        <Col md={3} style={{ backgroundColor: "pink" }}>
          <Preferences token={token} />
        </Col>
        <Col md={7} style={{ backgroundColor: "red" }}>
          <Playlist token={token} />
        </Col>
        <Col md={2} style={{ backgroundColor: "yellow" }}>
          <Recommendations />
        </Col>
      </Row>
    </Container>
  );
}

// <Preferences />
//
//
