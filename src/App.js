import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import NewSong from "./Components/NewSong";
import EditSong from "./Components/EditSong";

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
  crossorigin="anonymous"
/>;

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/new" element={<NewSong />} />
        <Route path="/edit" element={<EditSong />} />
      </Routes>
    </div>
  );
}

export default App;
