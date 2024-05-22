class songs {
  songs = [];
  create(titolo, autore, genere, anno, durata) {
    const song = {
      id: Math.random(),
      titolo: titolo,
      autore: autore,
      genere: genere,
      anno: anno,
      durata: durata,
    };
    this.songs.push(song);
    return song;
  }
}
module.exports = songs;
