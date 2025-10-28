const Urheilija = require("../models/Urheilija");

exports.getAll = async (req, res, next) => {
  try {
    const [urheilijat, _] = await Urheilija.findAll();
    res.status(200).json({ count: urheilijat.length, urheilijat });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getById = async (req, res, next) => {
  try {
    let id = Number(req.params.id);
    let [urheilijat, _] = await Urheilija.findById(id);
    res.status(200).json({ urheilija: urheilijat[0] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.createNew = async (req, res, next) => {
  try {
    let {
      etunimi,
      sukunimi,
      kutsumanimi,
      syntymavuosi,
      paino,
      kuva,
      laji,
      saavutukset,
    } = req.body;
    let athlete = new Urheilija(
      etunimi,
      sukunimi,
      kutsumanimi,
      syntymavuosi,
      paino,
      kuva,
      laji,
      saavutukset
    );
    athlete = await athlete.save();
    let [urheilijat, _] = await Urheilija.findNewest();
    res.status(201).json({ urheilija: urheilijat[0] });
    console.log("Lisäys onnistui.");
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.updateById = async (req, res, next) => {
  try {
    let {
      etunimi,
      sukunimi,
      kutsumanimi,
      syntymavuosi,
      paino,
      kuva,
      laji,
      saavutukset,
    } = req.body;
    let athlete = new Urheilija(
      etunimi,
      sukunimi,
      kutsumanimi,
      syntymavuosi,
      paino,
      kuva,
      laji,
      saavutukset
    );
    let id = Number(req.params.id);
    athlete = await athlete.update(id);
    let [urheilijat, _] = await Urheilija.findById(id);
    res.status(201).json({ urheilija: urheilijat[0] });
    console.log("Päivitys onnistui.");
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.deleteById = async (req, res, next) => {
  try {
    let id = Number(req.params.id);
    let [athlete, _] = await Urheilija.delete(id);
    res.status(200).json({ athlete: athlete[0] });
    console.log("Poisto onnistui.");
  } catch (error) {
    console.log(error);
    next(error);
  }
};
