/* =========================================================
   ELENCO EVENTI DI OPQ
   ---------------------------------------------------------
   È l'unico posto da modificare per aggiungere un evento.
   Il sito decide da solo se è "in programma" o "passato"
   confrontando la data con quella di oggi.

   Per aggiungere un evento:
   1. metti la locandina (jpg, circa 1000x1250 px) in
      assets/img/locandine/
   2. copia un blocco qui sotto e cambia i campi.

   Campi:
   - data:       "AAAA-MM-GG"
   - ora:        "21:30"
   - titolo:     nome dell'evento o dell'artista
   - sottotitolo: (facoltativo) ospite, tema, ecc.
   - rassegna:   "Giradischi", "GiraJam", "Ci dici la tua?",
                 "Sorsi di cultura" oppure "" se non fa parte di una rassegna
   - tipo:       "musica" | "incontri" | "feste"  (serve per i filtri;
                 "feste" comprende anche teatro e spettacoli)
   - etichetta:  (facoltativo) parola mostrata al posto del tipo,
                 es. "Teatro"
   - ingresso:   testo libero
   - locandina:  percorso dell'immagine
   ========================================================= */

window.EVENTI_OPQ = [
  {
    data: "2026-11-29", ora: "17:00",
    titolo: "1522 – per non perderne più nessuna",
    sottotitolo: "I Guitti e cantasorie. Cinque personaggi rivivono il dramma di Giada, vittima di femminicidio",
    rassegna: "", tipo: "feste", etichetta: "Teatro",
    ingresso: "Ingresso gratuito con tessera soci OPQ (5€)",
    locandina: "assets/img/locandine/1522.jpg"
  },
  {
    data: "2026-11-07", ora: "21:00",
    titolo: "Velvetnojazz Trio",
    sottotitolo: "Dove il folk incontra il jazz",
    rassegna: "Giradischi", tipo: "musica",
    ingresso: "Con tessera soci · 10€ + consumazione",
    locandina: "assets/img/locandine/giradischi-velvetnojazz.jpg"
  },
  {
    data: "2026-10-25", ora: "16:00",
    titolo: "Sorsi di cultura",
    sottotitolo: "Sergio Giuntini, “Nomi di battaglia”: storie di antifascismo e resistenza a Novate Milanese",
    rassegna: "Sorsi di cultura", tipo: "incontri",
    ingresso: "Ingresso gratuito con tessera soci OPQ (5€)",
    locandina: "assets/img/locandine/1025-sorsi-1.jpg"
  },
  {
    data: "2026-06-27", ora: "18:00",
    titolo: "Aperitivo in cortile",
    sottotitolo: "Fritti, birrette e DJ set",
    rassegna: "", tipo: "feste",
    ingresso: "Con tessera soci · 10€ mix fritti + birra o spritz",
    locandina: "assets/img/locandine/insta-post-55.jpg"
  },
  {
    data: "2026-06-24", ora: "21:00",
    titolo: "Ora tocca a noi",
    sottotitolo: "La nostra generazione, il nostro territorio. Uno spazio di confronto civico",
    rassegna: "", tipo: "incontri",
    ingresso: "Ingresso gratuito con tessera soci OPQ (5€)",
    locandina: "assets/img/locandine/insta-post-54.jpg"
  },
  {
    data: "2026-06-20", ora: "21:30",
    titolo: "Diorama",
    sottotitolo: "Cantautore funky, croccante, sfacciatamente ottimista",
    rassegna: "Giradischi", tipo: "musica",
    ingresso: "Ingresso gratuito con tessera soci OPQ (5€)",
    locandina: "assets/img/locandine/1.jpg"
  },
  {
    data: "2026-06-13", ora: "21:00",
    titolo: "Il varietà dello struzzo",
    sottotitolo: "Cabaret, teatro e laboratorio artistico dal vivo",
    rassegna: "", tipo: "feste", etichetta: "Teatro",
    ingresso: "Con tessera soci · 10€ + consumazione",
    locandina: "assets/img/locandine/insta-post-50.jpg"
  },
  {
    data: "2026-05-30", ora: "21:30",
    titolo: "Giovanni Milani",
    sottotitolo: "",
    rassegna: "Giradischi", tipo: "musica",
    ingresso: "Con tessera soci · 10€ + consumazione",
    locandina: "assets/img/locandine/1-1.jpg"
  },
  {
    data: "2026-05-21", ora: "21:00",
    titolo: "GiraJam",
    sottotitolo: "La jam session sul palchetto di OPQ",
    rassegna: "GiraJam", tipo: "musica",
    ingresso: "Con tessera soci · 10€ + consumazione",
    locandina: "assets/img/locandine/insta-post-42.jpg"
  },
  {
    data: "2026-05-09", ora: "21:30",
    titolo: "PIT",
    sottotitolo: "",
    rassegna: "Giradischi", tipo: "musica",
    ingresso: "Con tessera soci · 10€ + consumazione",
    locandina: "assets/img/locandine/insta-post-40.jpg"
  },
  {
    data: "2026-04-10", ora: "21:00",
    titolo: "Flying Bus Live",
    sottotitolo: "Suburbia, Youngover, The Scurbats",
    rassegna: "", tipo: "musica",
    ingresso: "Con tessera soci · 10€ con consumazione",
    locandina: "assets/img/locandine/insta-post-30-flying-bus.jpg"
  },
  {
    data: "2026-03-27", ora: "21:30",
    titolo: "Frappé / Garaggio",
    sottotitolo: "Side A e Side B",
    rassegna: "Giradischi", tipo: "musica",
    ingresso: "Con tessera soci · 10€ + consumazione",
    locandina: "assets/img/locandine/insta-post-28.jpg"
  },
  {
    data: "2026-03-13", ora: "21:30",
    titolo: "Pollo & Le Amiche della Sposa",
    sottotitolo: "",
    rassegna: "Giradischi", tipo: "musica",
    ingresso: "Con tessera soci · 10€ + consumazione",
    locandina: "assets/img/locandine/insta-post-25.jpg"
  },
  {
    data: "2026-03-12", ora: "21:00",
    titolo: "Se vuoi la pace, prepara la pace",
    sottotitolo: "Con Riccardo Burgazzi (Prospero Editore). Due libri, due epoche, una stessa domanda",
    rassegna: "", tipo: "incontri",
    ingresso: "Riservato ai soci · tessera 5€",
    locandina: "assets/img/locandine/insta-post-24.jpg"
  },
  {
    data: "2026-03-05", ora: "20:30",
    titolo: "Ci dici la tua? Referendum costituzionale",
    sottotitolo: "La giustizia per tutti. Ospite Luca Villa. In collaborazione con ANPI",
    rassegna: "Ci dici la tua?", tipo: "incontri",
    ingresso: "Riservato ai soci · tessera 5€",
    locandina: "assets/img/locandine/insta-post-22-ci-dici-la-tua-5-marzo.jpg"
  },
  {
    data: "2026-02-19", ora: "20:30",
    titolo: "Ci dici la tua? Né destra, né sinistra",
    sottotitolo: "In collaborazione con ANPI",
    rassegna: "Ci dici la tua?", tipo: "incontri",
    ingresso: "Riservato ai soci · tessera 5€",
    locandina: "assets/img/locandine/insta-post-20.jpg"
  },
  {
    data: "2026-02-13", ora: "21:30",
    titolo: "Settemaggio / Anemone",
    sottotitolo: "Side A e Side B",
    rassegna: "Giradischi", tipo: "musica",
    ingresso: "Con tessera soci · 10€ + consumazione",
    locandina: "assets/img/locandine/insta-post-18.jpg"
  },
  {
    data: "2025-12-19", ora: "21:00",
    titolo: "A Natale si può bere un vin brulé",
    sottotitolo: "Porta la tua tazza",
    rassegna: "", tipo: "feste",
    ingresso: "",
    locandina: "assets/img/locandine/insta-post-12.jpg"
  }
];
