import React, { useContext, useEffect, useState } from "react";
import UrheilijatContext from "../contexts/UrheilijatContext";
import UrheilijaTieto from "./UrheilijaTieto";
import Container from "react-bootstrap/esm/Container";

// Komponentti, joka toimii näkymänä kaikkien urheilijoiden tietojen näyttämiseen
const UrheilijaTiedot = () => {
  const urheilijatContext = useContext(UrheilijatContext);

  // Haetaan kaikki urheilijat
  useEffect(() => {
    urheilijatContext.getUrheilijat();
  }, []);
  return (
    <Container style={{ padding: "2rem" }}>
      <h4>Urheilijoiden tiedot</h4>

      <React.Fragment>
        {urheilijatContext.urheilijat.length
          ? urheilijatContext.urheilijat.map((urheilija) => (
              <UrheilijaTieto key={urheilija.id} urheilija={urheilija} />
            ))
          : "Urheilijoita ei löytynyt. " + urheilijatContext.urheilijat.length}
      </React.Fragment>
    </Container>
  );
};

export default UrheilijaTiedot;
