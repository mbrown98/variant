import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import API from "../api/api";
import axios from "axios";

export default function UserInputs({ token, updateArtists }) {
  const { register, handleSubmit, errors } = useForm();
  const [artistIds, setArtistIds] = useState([]);
  const onSubmit = async (data) => {
    axios
      .get(`https://api.spotify.com/v1/search?q=${data.artist1}&type=artist`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        console.log(response.data.artists.items[0].id);
        let artistId = response.data.artists.items[0].id;
        updateArtists(artistId);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="artist1" defaultValue="" ref={register} />

      <input type="submit" />
    </form>
  );
}
