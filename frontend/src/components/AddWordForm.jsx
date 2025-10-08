import React, { useState } from "react";

export default function AddWordForm() {
  const [finnish, setFinnish] = useState("");
  const [english, setEnglish] = useState("");
  const [message, setMessage] = useState("");

  const SubmitClickEvent = async (event) => {
    //submit ei lataa sivua uudelleen, vaan lähettää post-sanoman serverille
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: `{"entry": "${finnish} ${english}"}`, //body muodostetaan useStaella tallennetuista muuttujista
      });
      response.ok //päivitetään viesti sen mukaan, menikö sanoma läpi
        ? setMessage("Sanat lisätty sanakirjaan.")
        : setMessage("Sanojen lisääminen ei onnistunut: " + response.status);
    } catch (e) {
      setMessage("Tapahtui virhe.");
    }
  };
  return (
    <>
      <form onSubmit={SubmitClickEvent}>
        <label for="finnishWord">Suomeksi:</label>
        <br />
        <input
          type="text"
          id="finnishWord"
          name="finnishWord"
          onChange={
            () =>
              setFinnish(
                finnishWord.value.toString()
              ) /*muuttaminen päivittää suomenkielisen sanan muuttujan*/
          }
        />
        <br />
        <label for="englishTranslation">Englanniksi:</label>
        <br />
        <input
          type="text"
          id="englishTranslation"
          name="englishTranslation"
          onChange={
            () =>
              setEnglish(
                englishTranslation.value.toString()
              ) /*muuttaminen päivittää englanninkielisen sanan muuttujan*/
          }
        />
        <br />
        <input type="submit" value="Lisää sanat" />
      </form>
      {
        message && (
          <p>{message}</p>
        ) /*näyttää viestin, kunhan siinä on jotain sisältöä (sanoman jälkeen)*/
      }
    </>
  );
}
