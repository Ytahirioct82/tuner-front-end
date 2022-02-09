import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditSong() {
  const URL = process.env.REACT_APP_BASE_URL;
  const { id } = useParams();
  const navigate = useNavigate();
  const [song, setSong] = useState([
    {
      name: "",
      artist: "",
      album: "",
      time: "",
      is_favorite: "",
      lyrics: "",
    },
  ]);

  useEffect(() => {
    axios
      .get(`${URL}/songs/${id}`)
      .then((res) => {
        console.log(res.data);
        setSong(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [URL]);

  const HandleChange = (event) => {
    console.log(song.lyrics);
    setSong({ ...song, [event.target.name]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setSong({ ...song, is_favorite: !song.is_favorite });
  };

  const HandleSubmit = (event) => {
    event.preventDefault();

    Object.keys(song).length >= 6 &&
      axios
        .put(`${URL}/songs/${id}`, song)
        .then(() => navigate(`/`))
        .catch((error) => console.log("catch", error));
  };

  console.log(song);

  return (
    <div className="New">
      <p>Edit Song</p>
      <form onSubmit={HandleSubmit}>
        <label className="label" htmlFor="name">
          Song
        </label>
        <br />
        <input type="text" value={song.name} name="name" placeholder="name" onChange={HandleChange} />
        <br />
        <br />

        <label className="label" htmlFor="artist">
          Artist
        </label>
        <br />
        <input type="text" value={song.artist} name="artist" placeholder="artist" onChange={HandleChange} />
        <br />
        <br />

        <label className="label" htmlFor="date">
          Release Date
        </label>
        <br />
        <input
          type="number"
          min="1900"
          max="2022"
          value={song.time}
          name="time"
          placeholder="date"
          onChange={HandleChange}
        />
        <br />
        <br />

        <label className="label" htmlFor="album">
          Album
        </label>
        <br />
        <input type="text" value={song.album} name="album" placeholder="album" onChange={HandleChange} />
        <br />
        <br />

        <label htmlFor="is_favorite">Favorite:</label>
        <input id="is_favorite" type="checkbox" onChange={handleCheckboxChange} checked={song.is_favorite} />
        <br />
        <br />

        <label className="label" htmlFor="album">
          Lyrics
        </label>
        <br />
        <textarea type="text" value={song.lyrics} name="lyrics" placeholder="lyrics" onChange={HandleChange} />
        <br />
        <br />

        <button type="submit">EDIT SONG</button>
      </form>
    </div>
  );
}

export default EditSong;
