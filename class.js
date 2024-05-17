class app {
  users = [
    (id = "1"),
    (nikname = "gian"),
    (nome = "gianluca"),
    (cognome = "craparotta"),
    (email = "gian@example.com"),
    (password = "boh"),
  ];
  canzone = [
    (id = "1"),
    (titolo = "boh"),
    (autore = "boh"),
    (album = "boh"),
    (genere = "boh"),
    (anno = "boh"),
    (durata = "boh"),
    (idartista = "boh"),
    (idalbum = "boh"),
  ];
  artista = [(id = 1), (nome = "boh"), (cognome = "boh")];
  album = [
    (id = "1"),
    (titolo = "boh"),
    (autore = "boh"),
    (genere = "boh"),
    (anno = "boh"),
    (idautore = "boh"),
  ];
  playlist = [(id = "1"), (titolo = "boh"), (autore = "boh"), (iduser = "boh")];

  /* chats = [];
  messages = [];*/
}
class user {
  constructor() {
    this.users = null;
  }
}
class canzone {
  constructor() {
    this.canzone = null;
  }
}
class artista {
  constructor() {
    this.artista = null;
  }
}
class album {
  constructor() {
    this.album = null;
  }
}

class playlist {
  constructor() {
    this.playlist = null;
  }
}
