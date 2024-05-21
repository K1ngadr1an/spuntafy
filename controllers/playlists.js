class Playlists {
  playlists = [];
  create(titolo, autore, canzoni) {
    const Playlist = {
      id: math.random(),
      titolo: titolo,
      autore: autore,
      canzoni: canzoni,
    };
    this.Playlists.push(Playlist);
    return Playlist;
  }
}
module.exports = Playlists;
