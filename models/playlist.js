class ModelPlaylist {
  constructor(titolo, canzoni, iduser) {
    this.id = Math.random();
    this.titolo = titolo;
    this.iduser = iduser;
    this.canzoni = canzoni;
  }
}
module.exports = ModelPlaylist;
