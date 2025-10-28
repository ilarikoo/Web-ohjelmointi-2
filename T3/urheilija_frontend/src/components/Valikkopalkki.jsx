import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
const Valikkopalkki = () => {
  return (
    <>
      <Navbar
        className="rounded mb-10"
        expand="lg"
        bg="danger"
        data-bs-theme="dark"
      >
        <Container>
          <Navbar.Brand href="#home">Urheilijasovellus</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Alkuun</Nav.Link>
              <Nav.Link href="/lisaa">Lisää urheilija</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Valikkopalkki;
