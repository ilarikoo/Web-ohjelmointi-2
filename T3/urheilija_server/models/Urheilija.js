const db = require("../config/db");

class Urheilija {
  constructor(
    etunimi,
    sukunimi,
    kutsumanimi,
    syntymavuosi,
    paino,
    kuva,
    laji,
    saavutukset
  ) {
    this.etunimi = etunimi;
    this.sukunimi = sukunimi;
    this.kutsumanimi = kutsumanimi;
    this.syntymavuosi = syntymavuosi;
    this.paino = paino;
    this.kuva = kuva;
    this.laji = laji;
    this.saavutukset = saavutukset;
  }

  async save() {
    /*let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth() + 1;
    let dd = d.getDate();
    let createdDate = `${yyyy}-${mm}-${dd}`;*/

    let sql = `INSERT INTO urheilijat(etunimi, sukunimi, kutsumanimi, syntymavuosi, paino, kuva, laji, saavutukset)
        VALUES('${this.etunimi}', '${this.sukunimi}', '${this.kutsumanimi}', '${this.syntymavuosi}-00-00', '${this.paino}',
         '${this.kuva}', '${this.laji}', '${this.saavutukset}')`;

    const [newUrheilija, _] = await db.execute(sql);
    return newUrheilija;
  }

  async update(id) {
    /*let d = new Date();
    let yyyy = d.getFullYear();
    let mm = d.getMonth() + 1;
    let dd = d.getDate();
    let createdDate = `${yyyy}-${mm}-${dd}`;*/

    let sql = `UPDATE urheilijat SET etunimi ='${this.etunimi}', 
        sukunimi = '${this.sukunimi}', 
        kutsumanimi = '${this.kutsumanimi}', 
        syntymavuosi = '${this.syntymavuosi}-00-00', 
        paino = '${this.paino}', 
        kuva = '${this.kuva}', 
        laji = '${this.laji}', 
        saavutukset = '${this.saavutukset}'
        WHERE id=${id}`;

    const [updatedUrheilija, _] = await db.execute(sql);
    return updatedUrheilija;
  }

  static findAll() {
    let sql =
      "SELECT id, etunimi, sukunimi, kutsumanimi, YEAR(syntymavuosi) AS syntymavuosi, paino, kuva, laji, saavutukset FROM urheilijat;";
    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT id, etunimi, sukunimi, kutsumanimi, YEAR(syntymavuosi) AS syntymavuosi, paino, kuva, laji, saavutukset FROM urheilijat WHERE id=${id};`;
    return db.execute(sql);
  }

  static findNewest() {
    let sql = `SELECT id, etunimi, sukunimi, kutsumanimi, YEAR(syntymavuosi) AS syntymavuosi, paino, kuva, laji, saavutukset  FROM urheilijat WHERE id = (SELECT MAX(id) FROM urheilijat);`;
    return db.execute(sql);
  }

  static delete(id) {
    let sql = `DELETE FROM urheilijat WHERE id=${id}`;
    return db.execute(sql);
  }
}

module.exports = Urheilija;
