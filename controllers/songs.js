const Modelsong = require("../models/song");
class ControllerSongs {
  #songs = [];
  create(titolo, autore, genere, anno, durata) {
    const song = new ModelSong(titolo, autore, genere, anno, durata);
    this.#songs.push(song);
    return song;
  }
}
module.exports = ControllerSongs;
