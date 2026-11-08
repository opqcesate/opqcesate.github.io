# Sito OPQ — Opificio Culturale

Sito statico (HTML + CSS + un po' di JavaScript), pensato per GitHub Pages
(repository `opqcesate.github.io`). Non serve nessun programma per compilarlo.

## Pagine
- `index.html`: home con video di copertina, prossimi eventi, rassegne, archivio, spazi, tessera, mappa
- `eventi.html`: eventi in programma, archivio locandine con filtri, foto delle serate
- `spazi.html`: spazi in affitto (il messaggio è che l'affitto sostiene l'associazione)
- `chi-siamo.html`: chi siamo, organi, come diventare socio, statuto completo (trascritto)
- `contatti.html`: indirizzo, contatti, mappa
- `area-soci.html`: tessera digitale del socio (per ora dimostrativa)

## Aggiungere un evento
1. Esporta la locandina in JPG, 1000×1250 px, e mettila in `assets/img/locandine/`
2. Apri `assets/js/eventi.js`, copia un blocco `{ ... }` e cambia i campi
3. Fatto: se la data è futura compare in "Prossimi eventi", poi passa da solo in archivio

## Da completare
Le parti evidenziate in giallo nel sito (classe `da-fare`) sono testi o dati
mancanti: nomi del direttivo, storia dello spazio, foto di coworking e bar,
codice fiscale, testo "chi siamo".
Quando le compili, togli lo `<span class="da-fare">` attorno al testo.

## Struttura
```
assets/css/style.css   grafica (colori e font in cima al file)
assets/js/eventi.js    elenco eventi
assets/js/main.js      menu, video, schede eventi, archivio, statuto
assets/js/area-soci.js area soci (DEMO: da collegare a un elenco soci reale)
assets/img/            locandine, foto eventi, foto spazi (già ottimizzate)
assets/video/          video di copertina (mp4 leggeri) e anteprime
assets/logo/           logo orizzontale, marchio quadrato, favicon
Materiale/             file originali: NON viene caricato su GitHub (.gitignore)
```

Font: Instrument Serif (titoli) e Inter (testi), da Google Fonts.
