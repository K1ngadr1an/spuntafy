const ModelPlaylist = require("../models/playlist");
class ControllerPlaylists {
  #playlists = [];
  create(titolo, autore, canzoni) {
    const Playlist = new Playlist(titolo, autore, canzoni);
    this.#playlists.push(Playlist);
    return Playlist;
  }
}
module.exports = ControllerPlaylists;
