const ControllerSongs = require("./controllers/songs");
const ControllerPlaylists = require("./controllers/playlists");
class App {
  #songs = new ControllerSongs();
  #playlists = new ControllerPlaylists();
  addSong(titolo, autore, genere, anno, durata) {
    this.#songs.create(titolo, autore, genere, anno, durata);
  }

  #users = [];
  #messages = [];
  #session = null;

  signup(a, b) {
    if (!this.#session) {
      this.#users.push({
        id: Math.random(),
        username: a,
        password: b,
      });
    } else console.log("You are already logged in");
  }

  login(username, password) {
    if (!this.#session) {
      const userFound = this.#users.find(function (user) {
        if (user.username === username && user.password === password)
          return true;
        else return false;
      });
      if (!!userFound) {
        this.#session = { id: userFound.id, username: userFound.username };
        return userFound;
      } else {
        console.log("User not found");
        return null;
      }
    } else console.log("You are already logged in");
  }

  logout() {
    if (!!this.#session) this.#session = null;
    else console.log("You are not logged in");
  }
}
