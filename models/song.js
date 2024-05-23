class ModelSong {
  constructor(titolo, autore, genere, anno, durata) {
    this.id = Math.random();
    this.titolo = titolo;
    this.autore = autore;
    this.genere = genere;
    this.anno = anno;
    this.durata = durata;
  }
}
module.exports = ModelSong;
