class ModelAlbum {
  constructor(titolo, autore, genere, anno, canzoni) {
    this.id = Math.random();
    this.titolo = titolo;
    this.autore = autore;
    this.genere = genere;
    this.anno = anno;
    this.canzoni = canzoni;
  }
}
module.exports = ModelAlbum;
