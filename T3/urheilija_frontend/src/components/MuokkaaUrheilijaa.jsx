import { useNavigate } from "react-router-dom";
import UrheilijatContext from "../contexts/UrheilijatContext";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/esm/Card";
import CardBody from "react-bootstrap/esm/CardBody";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

// Komponentti urheilijan tietojen muuttamiseen
const MuokkaaUrheilijaa = () => {
  let history = useNavigate();
  const [etunimi, setEtunimi] = useState("");
  const [sukunimi, setSukunimi] = useState("");
  const [kutsumanimi, setKutsumanimi] = useState("");
  const [syntymavuosi, setSyntymavuosi] = useState("");
  const [paino, setPaino] = useState("");
  const [kuva, setKuva] = useState("");
  const [laji, setLaji] = useState("");
  const [saavutukset, setSaavutukset] = useState("");
  const [message, setMessage] = useState("");
  const urheilijatContext = useContext(UrheilijatContext);
  const { id } = useParams();

  // Haetaan id:n perusteella muokattavan urheilijan tiedot pohjaksi
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      urheilijatContext.getUrheilija(id).then((res) => {
        setEtunimi(res.urheilija.etunimi),
          setSukunimi(res.urheilija.sukunimi),
          setKutsumanimi(res.urheilija.kutsumanimi),
          setSyntymavuosi(res.urheilija.syntymavuosi),
          setPaino(res.urheilija.paino),
          setKuva(res.urheilija.kuva),
          setLaji(res.urheilija.laji),
          setSaavutukset(res.urheilija.saavutukset);
      });
    } else mounted = false;
  }, []);

  const submitClickEvent = async (event) => {
    //submit ei lataa sivua uudelleen, vaan lähettää put-sanoman serverille
    event.preventDefault();
    try {
      const uusiUrheilija = {
        etunimi: etunimi,
        sukunimi: sukunimi,
        kutsumanimi: kutsumanimi,
        syntymavuosi: syntymavuosi,
        paino: paino,
        kuva: kuva,
        laji: laji,
        saavutukset: saavutukset,
      };
      urheilijatContext.setUrheilija(id, uusiUrheilija);
      history("/");
    } catch (e) {
      setMessage("Tapahtui virhe.");
    }
  };
  return (
    <Container style={{ padding: "2rem" }}>
      <h4>Päivitä urheilija</h4>

      <Card>
        <CardBody>
          <Form onSubmit={submitClickEvent.bind(this)}>
            <Form.Group>
              <Form.Label>Etunimi</Form.Label>
              <Form.Control
                id="etunimiInput"
                type="text"
                className="form-control form-control"
                value={etunimi}
                onChange={(event) => setEtunimi(event.target.value)}
                //error={virheet.nimi}
              />
              <Form.Text className="invalid-feedback">Täytä etunimi</Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Sukunimi</Form.Label>
              <input
                id="sukunimiInput"
                type="text"
                className="form-control form-control"
                value={sukunimi}
                onChange={(event) => setSukunimi(event.target.value)}
                //error={virheet.nimi}
              />
              <div className="invalid-feedback">Täytä sukunimi</div>
            </Form.Group>
            <Form.Group>
              <Form.Label>Kutsumanimi</Form.Label>
              <input
                id="kutsumanimiInput"
                type="text"
                className="form-control form-control"
                value={kutsumanimi}
                onChange={(event) => setKutsumanimi(event.target.value)}
                //error={virheet.nimi}
              />
              <div className="invalid-feedback">Täytä kutsumanimi</div>
            </Form.Group>
            <Form.Group>
              <Form.Label>Syntymävuosi</Form.Label>
              <input
                id="syntymavuosiInput"
                type="text"
                className="form-control form-control"
                value={syntymavuosi}
                onChange={(event) => setSyntymavuosi(event.target.value)}
                //error={virheet.nimi}
              />
              <div className="invalid-feedback">Täytä syntymävuosi</div>
            </Form.Group>
            <Form.Group>
              <Form.Label>Paino</Form.Label>
              <input
                id="painoInput"
                type="text"
                className="form-control form-control"
                value={paino}
                onChange={(event) => setPaino(event.target.value)}
                //error={virheet.nimi}
              />
              <div className="invalid-feedback">Täytä paino</div>
            </Form.Group>
            <Form.Group>
              <Form.Label>Kuvan linkki</Form.Label>
              <input
                id="kuvaInput"
                type="text"
                className="form-control form-control"
                value={kuva}
                onChange={(event) => setKuva(event.target.value)}
                //error={virheet.nimi}
              />
              <div className="invalid-feedback">Täytä kuva</div>
            </Form.Group>
            <Form.Group>
              <Form.Label>Laji</Form.Label>
              <input
                id="lajiInput"
                type="text"
                className="form-control form-control"
                value={laji}
                onChange={(event) => setLaji(event.target.value)}
                //error={virheet.nimi}
              />
              <div className="invalid-feedback">Täytä laji</div>
            </Form.Group>

            <Form.Group>
              <Form.Label>Saavutukset</Form.Label>
              <Form.Control
                id="saavutuksetInput"
                as="textarea"
                rows={3}
                className="form-control form-control"
                value={saavutukset}
                onChange={(event) => setSaavutukset(event.target.value)}
                //error={virheet.nimi}
              />
              <div className="invalid-feedback">Täytä saavutukset</div>
            </Form.Group>
            <br />
            <Button type="submit" variant="secondary">
              Päivitä urheilija
            </Button>
          </Form>
        </CardBody>
      </Card>
      {
        message && (
          <p>{message}</p>
        ) /*näyttää viestin, kunhan siinä on jotain sisältöä (sanoman jälkeen)*/
      }
    </Container>
  );
};

export default MuokkaaUrheilijaa;
