import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalState from "./contexts/GlobalState";
import UrheilijaTiedot from "./components/UrheilijaTiedot";
import LisaaUrheilija from "./components/LisaaUrheilija";
import MuokkaaUrheilijaa from "./components/MuokkaaUrheilijaa";
import Valikkopalkki from "./components/Valikkopalkki";
function App() {
  return (
    <>
      <GlobalState>
        <BrowserRouter>
          <div className="App">
            <Valikkopalkki />
            <Routes>
              <Route path="/" element={<UrheilijaTiedot />} />
              <Route path="/lisaa" element={<LisaaUrheilija />} />
              <Route path="/muokkaa/:id" element={<MuokkaaUrheilijaa />} />
            </Routes>
          </div>
        </BrowserRouter>
      </GlobalState>
    </>
  );
}

export default App;
