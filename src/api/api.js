import axios from "axios";

let baseUrl = "https://api.spotify.com";

const API = {
  fetchPlaylist: (artist1, artist2, artist3, token) => {
    console.log("id made it here");
    axios
      .get(
        `${baseUrl}/v1/recommendations?limit=10&market=ES&seed_artists=3TVXtAsR1Inumwj472S9r4&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA`,
        { headers: { Authorization: "Bearer " + token } }
      )
      .then((response) => {
        console.log("response", response.data.tracks);
      });
    // return fetchByURL(`${baseURL}/qa/${id}`);
  },
  getArtistId: (artist, token) => {
    console.log(artist);
    axios
      .get(`${baseUrl}/v1/search?q=${artist}&type=artist`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        return response;
      });
  },
};

export default API;
