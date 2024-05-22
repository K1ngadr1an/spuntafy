const ModelArtist = require("../models/artist");
class Controllerartists {
  #artisti = [];
  create(nome, cognome) {
    const artisti = new ModelArtisti(nome, cognome);
    this.#artisti.push(artisti);
    return artisti;
  }
}
module.exports = Controllerartists;
