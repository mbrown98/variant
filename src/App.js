import React, { Component } from "react";
import hash from "./hash";

import "./App.css";
import Home from "./components/home";
import axios from "axios";

// import { clientId, redirectUri, scopes } from "./spotify_config";

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
      console.log(_token);

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
                process.env.CLIENT_ID +
                (process.env.SCOPES
                  ? "&scope=" + encodeURIComponent(process.env.SCOPES)
                  : "") +
                "&redirect_uri=" +
                encodeURIComponent(process.env.REDIRECT_URI) +
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
