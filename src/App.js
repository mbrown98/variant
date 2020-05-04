import React, { Component } from "react";
import hash from "./hash";

import "./App.css";
import Home from "./components/home";
import axios from "axios";

var cli = process.env.REACT_APP_CLIENT;

var redi = process.env.REACT_APP_REDIRECT;

// "https://variant-mus.herokuapp.com/oauth"
var scop = process.env.REACT_APP_SCOPE;

class App extends Component {
  constructor() {
    super();
    this.state = {
      token: null,
      tokenTimeSet: null,
      userId: null,
      expiresAt: null,
    };
  }
  componentDidMount() {
    var storedToken = JSON.parse(sessionStorage.getItem("token"));
    var expiresAt = null;
    let isExpired = null;
    if (storedToken) {
      expiresAt = new Date(storedToken.date);
      expiresAt.setHours(expiresAt.getHours() + 1);

      isExpired = expiresAt.getTime() < new Date().getTime();
    }

    if (storedToken && !isExpired) {
      this.setState(
        {
          token: storedToken.token,
        },
        () => {
          axios
            .get("https://api.spotify.com/v1/me", {
              headers: { Authorization: "Bearer " + storedToken },
            })
            .then((response) => {
              this.setState({ userId: response.data.id });
            });
        }
      );
    } else {
      let _token = hash.access_token;

      if (_token) {
        // Set token
        let store = { token: _token, date: new Date() };
        sessionStorage.setItem("token", JSON.stringify(store));
        this.setState({
          token: _token,
        });
        axios
          .get("https://api.spotify.com/v1/me", {
            headers: { Authorization: "Bearer " + storedToken },
          })
          .then((response) => {
            this.setState({ userId: response.data.id });
          });
      }
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.token ? (
          <Home
            token={this.state.token}
            userId={this.state.userId}
            changeColor={this.changeColor}
            expiresAt={this.state.expiresAt}
          />
        ) : (
          <div style={{ marginLeft: "30px" }}>
            <img
              src={require("./musicNote.png")}
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
      </div>
    );
  }
}
export default App;
