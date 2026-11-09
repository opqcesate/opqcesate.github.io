# Sito OPQ — Opificio Culturale (Cesate)

Sito statico dell'associazione culturale OPQ, pubblicato con GitHub Pages
dal repository `opqcesate/opqcesate.github.io` (branch `main`, cartella radice).
Indirizzo: https://opqcesate.github.io

Chi lo cura è Riccardo, vicepresidente dell'associazione. Scrivere in italiano,
in modo diretto e conciso.

## Regole di lavoro
- **Prima di pubblicare su GitHub (commit/push) chiedere sempre conferma a Riccardo.**
- Le informazioni devono essere verificate: non inventare fatti su OPQ (storia, persone,
  numeri, capienze). Dove un dato manca, lasciare un segnaposto `<span class="da-fare">…</span>`.
- `Materiale/` contiene gli originali (foto, video, loghi, statuto PDF): non va pubblicato
  (è in `.gitignore`). Lo statuto PDF ha firme e marche: non metterlo online.

## Struttura
- Pagine: `index.html`, `eventi.html`, `spazi.html` (Lo spazio), `chi-siamo.html`
  (con statuto completo trascritto), `contatti.html`, `area-soci.html`.
- Testata e piè di pagina sono **ripetuti in ogni pagina**: una modifica al menu o al
  footer va fatta in tutte e sei.
- `assets/css/style.css`: grafica. Le regole sono a strati (v2 → v3 → v4 in fondo al file);
  le ultime prevalgono.
- `assets/js/eventi.js`: **elenco eventi**, l'unico posto da modificare per aggiungere un
  evento. Il sito decide da solo se è "in programma" o "archivio" in base alla data.
- `assets/js/main.js`: menu mobile, testata trasparente sulla copertina, video,
  agenda/archivio/filtri, schede della pagina eventi, locandina ingrandita, statuto.
- `assets/js/area-soci.js`: area soci **dimostrativa** (accetta qualsiasi dato).
  Per renderla reale serve un elenco soci online e un accesso vero (es. Supabase con
  link via email); prima va decisa la gestione privacy/GDPR con il direttivo.
- Immagini già ottimizzate: locandine 1000×1250 in `assets/img/locandine/`, foto eventi e
  spazi max 1800 px, video copertina mp4 H.264 1080 px senza audio.
- Icone: `favicon.ico` (radice), `assets/logo/` (favicon.svg, icona-192/512, apple-touch-icon),
  anteprima social `assets/og-image.jpg` (1200×630), `site.webmanifest`.

## Scelte grafiche già decise (non cambiarle senza chiedere)
- Font: **Inter** (strutturale: titoli di pagina 500 molto grandi e stretti, titoli di sezione
  in maiuscolo, menu, etichette, pulsanti) + **Instrument Serif** (carattere distintivo:
  nomi eventi e rassegne, frasi grandi, titoli dei contenuti, statuto).
- Riferimento tipografico: Circolo Magnolia (Milano). Menu tra parentesi quadre `[EVENTI]`,
  pulsanti squadrati in maiuscolo.
- Colori: carta `#f3f0e8`, nero `#121110`, accento rosso OPQ `#e4502a`, e fondi pastello
  per sezione presi dalle locandine: rosa `#f8cdbc`, lilla `#d9cae7`, azzurro `#bfd7e2`,
  salvia `#c3dccb`, sabbia `#f2e0ad` (classi `.fondo-*`).
- Copertina home: due video a tutto schermo che si alternano, scuriti, **sempre in
  riproduzione, senza pulsante pausa e senza logo sovrapposto**.
- Niente pulsante "A+", niente numerini/contatori in apice, niente numerazione delle sezioni.
- L'affitto degli spazi resta discreto (sezione "Ospitare" in fondo a Lo spazio);
  tariffe e condizioni si concordano privatamente.
- Pagina eventi a schede: In programma / Archivio / Foto.
- Leggibilità alta: molti soci sono anziani (testo base 18 px, contrasti forti).

## Dati dell'associazione
- OPQ Associazione Culturale, Via dei Martiri 10, 20031 Cesate (MI)
- info@opqcesate.it · 347 608 3082 · Instagram @opqcesate
- Tessera associativa 5€ l'anno. Statuto firmato a Cesate il 14 ottobre 2025.

## Ancora da completare (segnaposto gialli)
Storia di OPQ e dello spazio, testo "chi siamo", nomi del direttivo, codice fiscale,
foto di coworking e bar.
