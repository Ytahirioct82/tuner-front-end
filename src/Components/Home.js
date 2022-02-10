import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const URL = process.env.REACT_APP_BASE_URL;

  const [songs, setSongs] = useState([]);
  const [selections, setSelections] = useState([]);

  useEffect(() => {
    axios
      .get(`${URL}/songs`)
      .then((res) => {
        const artists = [];
        const options = [];

        res.data.forEach((song) => {
          if (!artists.includes(song.artist)) {
            options.push(
              <option key={song.id} value={song.artist}>
                {song.artist}
              </option>
            );
            artists.push(song.artist);
          }
        });
        setSelections(options);
        setSongs(res.data);
      })

      .catch((err) => {
        console.log(err);
      });
  }, [URL]);

  function HandleDelete(event) {
    axios
      .delete(`${URL}/songs/${event.target.id}`)
      .then((res) => {
        console.log(res.data);
        setSongs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const result = songs.map((song, i) => {
    let fav = song.is_favorite ? "⭐️" : null;

    return (
      <tr key={i}>
        <td>{fav}</td>
        <td>{song.artist}</td>
        <td>{song.album}</td>
        <Link to={`/song/${song.id}`}>
          <td>{song.name}</td>
        </Link>
        <td>{song.time}</td>
        <td>
          <Link to={`/edit/${song.id}`}>✏️</Link>
        </td>
        <td>
          <button id={song.id} onClick={HandleDelete}>
            𐄂
          </button>
        </td>
      </tr>
    );
  });

  function HandleChange(event) {
    axios
      .get(`${URL}/songs?name=${event.target.value}`)
      .then((res) => {
        setSongs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Fav</th>
            <th>Artist </th>
            <th>Album</th>
            <th>Song</th>
            <th>Release</th>
          </tr>
        </thead>
        <tbody>{result}</tbody>
      </table>
      <select onChange={HandleChange}>
        <option>All Artists</option>
        {selections}
      </select>
    </div>
  );
}
export default Home;
