class ModelPlaylist {
  constructor(titolo, autore, canzoni) {
    this.id = Math.random();
    this.titolo = titolo;
    this.autore = autore;
    this.canzoni = canzoni;
  }
}
module.exports = ModelPlaylist;
