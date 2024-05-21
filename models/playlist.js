class Playlist {
  constructor(titolo, autore, canzoni) {
    this.id = math.random();
    this.titolo = titolo;
    this.autore = autore;
    this.canzoni = canzoni;
  }
}
module.exports = Playlist;
