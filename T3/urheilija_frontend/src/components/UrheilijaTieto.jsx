import React from "react";
import PropTypes from "prop-types";
import { useState, useContext } from "react";
import urheilijatContext from "../contexts/UrheilijatContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";

const UrheilijaTieto = (props) => {
  const UrheilijatContext = useContext(urheilijatContext);
  let history = useNavigate();
  const [naytaTiedot, setNaytaTiedot] = useState(false);

  const {
    id,
    etunimi,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    paino,
    kuva,
    laji,
    saavutukset,
  } = props.urheilija;
  const onShowClick = () => {
    let lippu = !naytaTiedot;
    setNaytaTiedot(lippu);
    console.log(syntymavuosi);
  };
  const onDeleteClick = (id) => {
    UrheilijatContext.deleteUrheilija(id);
    window.location.reload();
    history("/");
  };
  return (
    <Container className="my-5">
      <Card>
        <Card.Body>
          <Card.Title>
            {etunimi} {sukunimi}
          </Card.Title>
          <Button
            variant="outline-primary data-bs-light"
            onClick={onShowClick.bind(this)}
          >
            ...
          </Button>

          {naytaTiedot ? (
            <Container style={{ padding: "2rem" }}>
              <Row gap="3">
                <Col>
                  <Card.Img variant="top" src={kuva} />
                </Col>
                <Col>
                  <ListGroup>
                    <ListGroup.Item>Kutsumanimi: {kutsumanimi}</ListGroup.Item>
                    <ListGroup.Item>
                      Syntymävuosi: {syntymavuosi}
                    </ListGroup.Item>
                    <ListGroup.Item>Paino: {paino}</ListGroup.Item>
                    <ListGroup.Item>Laji: {laji}</ListGroup.Item>
                    <ListGroup.Item>Saavutukset: {saavutukset}</ListGroup.Item>
                  </ListGroup>
                  <Stack
                    direction="horizontal"
                    gap={2}
                    style={{ padding: "1rem" }}
                  >
                    <Button
                      variant="danger"
                      onClick={onDeleteClick.bind(this, { id })}
                    >
                      Poista
                    </Button>
                    <Link to={`/muokkaa/${id}`}>
                      <Button variant="secondary">Muokkaa</Button>
                    </Link>
                  </Stack>
                </Col>
              </Row>
              <Row></Row>
            </Container>
          ) : null}
        </Card.Body>
      </Card>
    </Container>
  );
};

UrheilijaTieto.propTypes = {
  urheilija: PropTypes.shape({
    id: PropTypes.number.isRequired,
    paino: PropTypes.number.isRequired,
  }),
};

export default UrheilijaTieto;
