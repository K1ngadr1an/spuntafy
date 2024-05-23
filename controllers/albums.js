const ModelAlbum = require("../models/album");
class ControllerAlbums {
  #albums = [];
  create(titolo, autore, genere, anno, canzoni) {
    const albums = new ModelAlbum(titolo, autore, genere, anno, canzoni);
    this.#albums.push(album);
    return album;
  }
  readBy(key, value) {
    return this.#albums.filter(function (album) {
      return album[key] === value;
    });
  }
}

module.exports = ControllerAlbums;
