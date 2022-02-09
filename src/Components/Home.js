import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
function Home() {
  const URL = process.env.REACT_APP_BASE_URL;
  console.log(URL);

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/songs`)
      .then((res) => {
        console.log(res.data);
        setSongs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [URL]);

  const result = songs.map((song, i) => {
    let fav = song.is_favorite ? "⭐️" : null;
    return (
      <tr key={i}>
        <td>{fav}</td> <td>{song.artist}</td> <td>{song.album}</td> <td>{song.name}</td> <td>{song.time}</td>
        <td>
          <Link to={`/edit/${song.id}`}>✏️</Link>
        </td>
      </tr>
    );
  });

  return (
    <tbody>
      <tr>
        <th>Fav</th>
        <th>Artist </th>
        <th>Album</th>
        <th>Song</th>
        <th>Release</th>
      </tr>
      {result}
    </tbody>
  );
}
export default Home;
