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
  (con statuto completo trascritto), `contatti.html`.
  `area-soci.html` è solo un rimando automatico al portale.
- Testata e piè di pagina sono **ripetuti in ogni pagina**: una modifica al menu o al
  footer va fatta in tutte e cinque.
- `assets/css/style.css`: grafica. Le regole sono a strati (v2 → v3 → v4 → v5 in fondo al file);
  le ultime prevalgono.
- `assets/js/eventi.js`: **elenco eventi**, l'unico posto da modificare per aggiungere un
  evento. Il sito decide da solo se è "in programma" o "archivio" in base alla data.
- `assets/js/main.js`: menu mobile, velo della testata (colore della fascia sottostante), video,
  agenda/archivio/filtri, schede della pagina eventi, locandina ingrandita, statuto.
- `assets/js/area-soci.js`: resto della vecchia area soci dimostrativa, non più usato.
- Immagini già ottimizzate: locandine 1000×1250 in `assets/img/locandine/`, foto eventi e
  spazi max 1800 px, video copertina mp4 H.264 1080 px senza audio.
- Icone: `favicon.ico` (radice), `assets/logo/` (favicon.svg, icona-192/512, apple-touch-icon),
  anteprima social `assets/og-image.jpg` (1200×630), `site.webmanifest`.

## Regola di impaginazione (vale per ogni nuovo blocco)
- Nessuna larghezza massima: a tutto schermo i contenuti arrivano ai margini.
- Margini esterni `--margine`, griglia a 12 colonne con spazio `--gutter`; le griglie annidate
  usano lo stesso spazio.
- Tre assi di allineamento: colonne 1, 5 e 9. Etichette sull'asse 1, contenuti sul 5, note sul 9.
- Spazi verticali solo con `--spazio-sezione` e `--spazio-blocco`. Sotto i 900 px i terzi vanno
  in colonna unica.

## Scelte grafiche già decise (non cambiarle senza chiedere)
- Testata sovrapposta ai contenuti, con sfocatura e velo a sfumatura progressiva; sulla
  copertina nessun velo, il video occupa tutto lo schermo.
- Piè di pagina nero e compatto: logo piccolo, dove, contatti, sito, associazione.
- Ogni pagina ha un colore che la copre tutta (classi `.pagina-*` sul `body`).
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
- Lo spazio è diviso in due parti: "Il racconto" e, in fondo, "Gli spazi che affittiamo"
  (fondo sabbia). Tariffe e condizioni si concordano privatamente, mai prezzi sul sito.
- Pagina eventi a schede: In programma / Archivio / Foto. Si apre sempre su In programma.
- Il link "Area soci" (menu e footer) porta al portale https://portale.opqcesate.it/area-soci.
- In Chi siamo la sezione "Come siamo organizzati" è nascosta per il momento (commento HTML).
- Leggibilità alta: molti soci sono anziani (testo base 18 px, contrasti forti).

## Dati dell'associazione
- OPQ Associazione Culturale, Via dei Martiri 10, 20031 Cesate (MI)
- info@opqcesate.it · 347 608 3082 · Instagram @opqcesate
- Codice fiscale 98008020152.
- Spazi: ex forno (bar, palchetto, salotto), sala polifunzionale (piano primo, circa 78 m²), giardino urbano
  (il cortile, a disposizione di OPQ e affittabile), cinema Mignon (da recuperare). Il bar è aperto ai soci.
- OPQ è un'associazione indipendente: non presentarla sul sito come ARCI né citare ARCI.
- Tessera associativa 5€ l'anno. Statuto firmato a Cesate il 14 ottobre 2025.

## Ancora da completare
Per ora questi dati sono stati tolti dal sito, senza segnaposto gialli (si reinseriscono quando ci sono):
nomi del direttivo (sezione nascosta), quali spazi si affittano davvero e le capienze,
foto della sala polifunzionale. Foto professionali degli spazi da sostituire.
