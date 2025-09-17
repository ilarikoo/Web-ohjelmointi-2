let dictionary = [];
const express = require("express");
const fs = require("fs");

var app = express();
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

/*CORS isnâ€™t enabled on the server, this is due to security reasons by default,
so no one else but the webserver itself can make requests to the server.*/
// Add headers
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  res.setHeader("Content-type", "application/json");

  // Pass to next layer of middleware
  next();
});

//funktio, joka palauttaa sanakirjatiedoston sisällön json-muodossa
function getData() {
  const data = fs.readFileSync("./sanakirja.txt", {
    encoding: "utf8",
    flag: "r",
  });
  //data:ssa on nyt koko tiedoston sisÃ¤ltÃ¶
  /*tiedoston sisÃ¤ltÃ¶ pitÃ¤Ã¤ pÃ¤tkiÃ¤ ja tehdÃ¤ taulukko*/
  const splitLines = data.split(/\r?\n/);
  /*TÃ¤ssÃ¤ voisi kÃ¤ydÃ¤ silmukassa lÃ¤pi splitLines:ssa jokaisen rivin*/
  splitLines.forEach((line) => {
    const words = line.split(" "); //sanat taulukkoon words
    //console.log(words);
    const word = {
      fin: words[0],
      eng: words[1],
    };
    dictionary.push(word);
  });
  return dictionary;
}

//Â GETÂ allÂ users
app.get("/words", (req, res) => {
  res.json(getData());
});

//get-funktio, joka ottaa parametrina suomenkielisen sanan ja palauttaa sen engalanninkielisen vastineen
app.get("/translate/:finnishWord", (req, res) => {
  data = getData();
  //haetaan sanakirjasta find-metodilla sanapari, jossa suomenkielinen sana vastaa annettua parametria
  //ja tallennetaan sanaparin englanninkielinen sana muuttujaan
  let englishWord = data.find(
    (word) => word.fin === req.params.finnishWord
  ).eng;
  //lopuksi lähetetään englanninkielinen sana bodyssa
  res.json(englishWord);
});

//post-funktio, jolla sanakirja.txt-tiedostoon lisätään uusi rivi
app.post("/add", (req, res) => {
  let data = req.body;
  let newEntry = data.entry; //bodyna esim. {"entry": "kala fish"}
  console.log(newEntry);
  fs.appendFileSync("./sanakirja.txt", "\n" + newEntry, {
    encoding: "utf8",
    flag: "a",
  });
  res.sendStatus(201);
});

app.listen(3000, () => {
  console.log("Server is listening at port 3000");
});
