import React, { Component } from "react";
import hash from "./hash";

import "./App.css";
import Home from "./components/home";
import axios from "axios";

const aws = require("aws-sdk");

// import { clientId, redirectUri, scopes } from "./spotify_config";

var cli = "fa03926404524a918e10b1c07fe31da5";

var redi = "https://salty-taiga-32207.herokuapp.com/oauth";

var scop =
  "user-read-private  streaming user-read-email playlist-modify-private playlist-modify-public";

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      tokenTimeSet: null,
      userId: null,
      selectedColor: "black",
    };
    this.changeColor = this.changeColor.bind(this);
  }
  componentDidMount() {
    var storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      this.setState({
        token: storedToken,
      });
      axios
        .get("https://api.spotify.com/v1/me", {
          headers: { Authorization: "Bearer " + storedToken },
        })
        .then((response) => {
          console.log("myInfo", response.data.id);
          this.setState({ userId: response.data.id });
        });
    } else {
      let _token = hash.access_token;

      if (_token) {
        // Set token
        sessionStorage.setItem("token", _token);
        this.setState({
          token: _token,
        });
        axios
          .get("https://api.spotify.com/v1/me", {
            headers: { Authorization: "Bearer " + storedToken },
          })
          .then((response) => {
            console.log("myInfo", response.data.id);
            this.setState({ userId: response.data.id });
          });
      }
    }
  }

  changeColor() {
    console.log("not implemented yet");
  }

  render() {
    return (
      <div
        className="App"
        style={{ backgroundColor: `${this.state.selectedColor}` }}
      >
        {this.state.token ? (
          <Home
            token={this.state.token}
            userId={this.state.userId}
            changeColor={this.changeColor}
          />
        ) : (
          <div style={{ marginLeft: "30px" }}>
            <img
              src={
                "https://www.iconsdb.com/icons/preview/white/music-note-xxl.png"
              }
              className="App-logo"
              alt="logo"
            />
            <div style={{ fontSize: "25vh", maxHeight: "50%" }}>variant</div>
            <a
              className="btn btn--loginApp-link"
              href={
                "https://accounts.spotify.com/authorize?" +
                "client_id=" +
                cli +
                (scop ? "&scope=" + encodeURIComponent(scop) : "") +
                "&redirect_uri=" +
                encodeURIComponent(redi) +
                "&response_type=token"
              }
              style={{ color: "white", borderColor: "white" }}
            >
              Login to Spotify
            </a>
          </div>
        )}
        {/* {this.state.token && (
        // Spotify Player Will Go Here In the Next Step
      )} */}
      </div>
    );
  }
}
export default App;
