import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
function Song() {
  const nav = useNavigate();
  const URL = process.env.REACT_APP_BASE_URL;
  const [songs, setSongs] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${URL}/songs/${id}`)
      .then((res) => {
        setSongs(res.data);
      })
      .catch((err) => {
        console.log(err);
        nav("/");
      });
  }, []);

  return (
    <div>
      <h3>LYRICS</h3>
      <h4>{songs.artist}</h4>
      <h4>{songs.name}</h4>
      <h6>{songs.lyrics}</h6>
    </div>
  );
}

export default Song;
