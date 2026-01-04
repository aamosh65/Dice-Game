import "./App.css";
import Mainpage from "./pages/Mainpage.jsx";
import Lobby from "./pages/Lobby.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/lobby" element={<Lobby />} />
      </Routes>
    </>
  );
}

export default App;
