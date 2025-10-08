import "./App.css";
import AddWordForm from "./components/AddWordForm";
import WordSearch from "./components/WordSearch";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <h2>Suomi-englanti-sanakirja</h2>
      {
        //Linkit, joista komponentit avataan
      }
      <div>
        <a href="/add">Lisää sana</a>
        <br />
        <a href="/translate">Etsi käännös</a>
      </div>
      {
        //Reititys kahdelle komponentille
      }
      <BrowserRouter>
        <Routes>
          <Route path="add" element={<AddWordForm />} />
          <Route path="translate" element={<WordSearch />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
