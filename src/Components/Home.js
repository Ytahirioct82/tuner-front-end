import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
function Home() {
  const URL = process.env.REACT_APP_BASE_URL;
  console.log(URL);

  const [songs, setSongs] = useState([]);
  console.log(songs);
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
      <tr>
        <td>{fav}</td> <td>{song.artist}</td> <td>{song.album}</td> <td>{song.name}</td> <td>{song.time}</td>
      </tr>
    );
  });

  return (
    <div>
      <Link to="/edit">
        <Button>{result}</Button>
      </Link>
    </div>
  );
}
export default Home;
