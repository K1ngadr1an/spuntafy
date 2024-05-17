class Album {
  constructor(id, titolo, autore, genere, anno) {
    this.id = Math.random();
    this.titolo = titolo;
    this.autore = autore;
    this.genere = genere;
    this.anno = anno;
    this.idArtista = Math.random();
    this.idAutore = Math.random();
  }
}
