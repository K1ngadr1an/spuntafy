class artisti {
  artisti = [];
  create(nome, cognome) {
    const artisti = {
      id: math.random(),
      nome: nome,
      cognome: cognome,
    };

    this.artisti.push(artisti);
    return artisti;
  }
}
module.exports = artisti;
