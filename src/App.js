import React, { Component } from "react";
import hash from "./hash";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";

import { clientId, redirectUri, scopes } from "./spotify_config";

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      tokenTimeSet: null,
    };
  }
  componentDidMount() {
    var storedToken = sessionStorage.getItem("token");
    if (storedToken) {
      this.setState({
        token: storedToken,
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
      }
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.token ? (
          <Home token={this.state.token} />
        ) : (
          <div>
            <img
              src={
                "https://www.iconsdb.com/icons/preview/white/music-note-xxl.png"
              }
              className="App-logo"
              alt="logo"
            />
            <a
              className="btn btn--loginApp-link"
              href={
                "https://accounts.spotify.com/authorize?" +
                "client_id=" +
                clientId +
                (scopes ? "&scope=" + encodeURIComponent(scopes) : "") +
                "&redirect_uri=" +
                encodeURIComponent(redirectUri) +
                "&response_type=token"
              }
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
