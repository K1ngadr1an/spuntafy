const ControllerSongs = require("./controllers/songs");

class App {
  #songs = new ControllerSongs();

  addSong(titolo, autore, genere, anno, durata) {
    this.#songs.create(titolo, autore, genere, anno, durata);
  }
}
