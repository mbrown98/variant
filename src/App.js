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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.token ? (
            <Home token={this.state.token} />
          ) : (
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
          )}
          {/* {this.state.token && (
        // Spotify Player Will Go Here In the Next Step
      )} */}
        </header>
      </div>
    );
  }
}
export default App;
