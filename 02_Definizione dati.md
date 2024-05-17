# Quali dati sono necessari?

- Possibilità di cercare e selezionare il brano desiderato.

- Identiificare le entità: canzone, artista, album, playlist.
- Funzioni per ogni entità:

**_entità canzone_**: informazioni brano: titolo brano, autore, durata e riproduzione.

**_entità artista_**: informazioni artista: immagine profilo artista, nome, cognome, breve biografia.

**_entità album_**: informazioni album: titolo album, immagine copertina, autore, lista brani.

**_entità playlist_**: informazioni playlist: Nome playlist, numero di canzoni, suddivisione per genere, suddivisione per autore.

# Proprietà dell'entità:

## Utente..

### Attributi:

- **id**: Identificatore dell'utente.
- **nome**: Nome dell'utente.
- **email**: Indirizzo email dell'utente.
- **password**: Password dell'utente (opportunamente criptata).
- **data_di_registrazione**: Data in cui l'utente si è registrato.
- **tipo_di_abbonamento**: Tipo di abbonamento (es. gratuito, premium).

### Comportamenti:

**registrarsi()**: Permette all'utente di registrarsi all'app.
**effettuare_login()**: Permette all'utente di effettuare il login.
**aggiornare_preferenze(preferenze)**: Aggiorna le preferenze dell'utente.

## Artista:

### Attributi:

- **id**: Identificatore univoco dell'artista.
  **nome**: Nome dell'artista.
  **biografia**: Biografia dell'artista.
  **genere**: Genere musicale principale dell'artista.
  **immagine**: URL o percorso dell'immagine dell'artista.

### Comportamenti:

- aggiungere_biografia(biografia): Aggiunge o aggiorna la biografia dell'artista.
- aggiungere_album(album): Aggiunge un nuovo album all'artista.

## Album

### Attributi:

- id: Identificatore univoco dell'album.
- titolo: Titolo dell'album.
- data_di_rilascio: Data di rilascio dell'album.
- genere: Genere musicale dell'album.
- artista_id: Identificatore dell'artista che ha creato l'album.
- copertina: URL o percorso dell'immagine di copertina dell'album.

## Comportamenti

- aggiungere_dettagli(titolo, data_di_rilascio, genere, copertina):

- Aggiunge o aggiorna i dettagli dell'album.
  elencare_tracce(): Elenca tutte le tracce dell'album.

## Traccia

### Attributi:

- id: Identificatore univoco della traccia.
- titolo: Titolo della traccia.
- durata: Durata della traccia.
- genere: Genere musicale della traccia.
- album_id: Identificatore dell'album a cui appartiene la traccia.
- artista_id: Identificatore dell'artista che ha creato la traccia.
- url_audio: URL o percorso del file audio della traccia.

### Comportamenti:

- riprodurre(): Riproduce la traccia.
- aggiungere_ai_preferiti(): Aggiunge la traccia ai preferiti dell'utente.
- aggiungere_a_playlist(playlist): Aggiunge la traccia a una playlist.

## Playlist

### Attributi:

- id: Identificatore univoco della playlist.
- nome: Nome della playlist.
- utente_id: Identificatore dell'utente che ha creato la playlist.
- data_di_creazione: Data di creazione della playlist.

### Comportamenti:

- aggiungere_traccia(traccia): Aggiunge una traccia alla playlist.
- rimuovere_traccia(traccia): Rimuove una traccia dalla playlist.
- riprodurre_playlist(): Riproduce tutte le tracce della playlist.
- condividere_playlist(): Condivide la playlist con altri utenti.

## Genere

### Attributi:

- id: Identificatore univoco del genere.
- nome: Nome del genere.
- descrizione: Descrizione del genere.

### Comportamenti:

- associare_traccia(traccia): Associa una traccia al genere.
- associare_artista(artista): Associa un artista al genere.

## Preferenza

### Attributi:

- utente_id: Identificatore dell'utente.
- traccia_id: Identificatore della traccia.
- data_aggiunta: Data in cui la traccia è stata aggiunta ai preferiti.

### Comportamenti:

- aggiungere_traccia_preferita(traccia): Aggiunge una traccia ai preferiti.
- rimuovere_traccia_preferita(traccia): Rimuove una traccia dai preferiti.

## Recensione

### Attributi:

- id: Identificatore univoco della recensione.
- utente_id: Identificatore dell'utente che ha scritto la recensione.
- album_id: Identificatore dell'album recensito.
- valutazione: Valutazione data all'album.
- commento: Commento della recensione.
- data_di_pubblicazione: Data di pubblicazione della recensione.

Comportamenti:

- aggiungere_recensione(recensione): Aggiunge una nuova recensione.
- modificare_recensione(recensione): Modifica una recensione esistente.
- eliminare_recensione(): Elimina una recensione esistente.

## Storico_di_Ascolto

### Attributi:

- id: Identificatore univoco dello storico di ascolto.
- utente_id: Identificatore dell'utente.
- traccia_id: Identificatore della traccia ascoltata.
- data_ascolto: Data e ora in cui la traccia è stata ascoltata.

### Comportamenti:

- registrare_ascolto(traccia): Registra l'ascolto di una traccia.
- visualizzare_storico(): Visualizza lo storico degli ascolti.
