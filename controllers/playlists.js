const ModelPlaylist = require("../models/playlist");
const ControllerSongs = require("./songs.js");

class ControllerPlaylists {
  #playlists = [];
  create(titolo, canzoni) {
    const Playlist = new Playlist(titolo, iduser, canzoni);
    this.#playlists.push(Playlist);
    return Playlist;
  }
}
module.exports = ControllerPlaylists;
