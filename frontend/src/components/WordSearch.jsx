import React, { useState } from "react";

export default function WordSearch() {
  const [finnish, setFinnish] = useState("");
  const [message, setMessage] = useState("");
  const SubmitClickEvent = async (event) => {
    /*submit lähettää get-sanoman*/
    event.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3000/translate/" + finnish, //parametrina suomenkielinen sana useState-hookista
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      response.ok
        ? setMessage("Käännös: " + (await response.json())) //muutetaan vastauksen vartalo jsoniksi ja esitetään viestissä
        : setMessage("Käännöstä ei löytynyt. " + response.status);
    } catch (e) {
      setMessage("Tapahtui virhe.");
    }
  };
  return (
    <>
      <form onSubmit={SubmitClickEvent}>
        <label for="finnishWord">Syötä suomenkielinen sana:</label>
        <br />
        <input
          type="text"
          id="finnishWord"
          name="finnishWord"
          onChange={() =>
            setFinnish(finnishWord.value.toString())
          } /*muuttaminen päivittää suomenkielisen sanan muuttujan*/
        />
        <br />
        <input type="submit" value="Etsi sanakirjasta" />
      </form>
      {
        message && (
          <p>{message}</p>
        ) /*näyttää viestin, kunhan siinä on jotain sisältöä (sanoman jälkeen)*/
      }
    </>
  );
}
