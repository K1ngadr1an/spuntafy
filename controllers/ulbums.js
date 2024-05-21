class albums {
  albums = [];
  create(titolo, autore, genere, anno, canzoni) {
    const album = {
      id: Math.random(),
      titolo: titolo,
      autore: autore,
      genere: genere,
      anno: anno,
      canzoni: canzoni,
    };
    this.albums.push(album);
    return album;
  }
}
module.exports = albums;
