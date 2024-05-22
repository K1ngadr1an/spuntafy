const ModelAlbum = require("../models/album");
class ControllerAlbums {
  #albums = [];
  create(titolo, autore, genere, anno, canzoni) {
    const albums = new ModelAlbum(titolo, autore, genere, anno, canzoni);
    this.#albums.push(album);
    return album;
  }
}
module.exports = ControllerAlbums;
