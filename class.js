class App {
  constructor() {
    this.users = [
      {
        id: "1",
        nickname: "gian",
        nome: "gianluca",
        cognome: "craparotta",
        email: "gian@example.com",
        password: "boh",
      },
    ];
    this.canzoni = [
      {
        id: "1",
        titolo: "boh",
        autore: "boh",
        album: "boh",
        genere: "boh",
        anno: "boh",
        durata: "boh",
        idArtista: "boh",
        idAlbum: "boh",
        idPlaylist: "boh",
      },
    ];
    this.artisti = [
      {
        id: "1",
        nome: "boh",
        cognome: "boh",
      },
    ];
    this.album = [
      {
        id: "1",
        titolo: "boh",
        autore: "boh",
        genere: "boh",
        anno: "boh",
        idArtista: "boh",
        idAutore: "boh",
      },
    ];
    this.playlist = [
      {
        id: "1",
        titolo: "boh",
        autore: "boh",
        idUser: "boh",
      },
    ];

    // this.chats = [];
    // this.messages = [];
  }
}

class User {
  constructor(id, nickname, nome, cognome, email, password) {
    this.id = id;
    this.nickname = nickname;
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.password = password;
  }
}

class Canzone {
  constructor(
    id,
    titolo,
    autore,
    album,
    genere,
    anno,
    durata,
    idArtista,
    idAlbum,
    idPlaylist
  ) {
    this.id = id;
    this.titolo = titolo;
    this.autore = autore;
    this.album = album;
    this.genere = genere;
    this.anno = anno;
    this.durata = durata;
    this.idArtista = idArtista;
    this.idAlbum = idAlbum;
    this.idPlaylist = idPlaylist;
  }
}

class Artista {
  constructor(id, nome, cognome) {
    this.id = id;
    this.nome = nome;
    this.cognome = cognome;
  }
}

class Album {
  constructor(id, titolo, autore, genere, anno, idArtista, idAutore) {
    this.id = id;
    this.titolo = titolo;
    this.autore = autore;
    this.genere = genere;
    this.anno = anno;
    this.idArtista = idArtista;
    this.idAutore = idAutore;
  }
}

class Playlist {
  constructor(id, titolo, autore, idUser) {
    this.id = id;
    this.titolo = titolo;
    this.autore = autore;
    this.idUser = idUser;
  }
}
