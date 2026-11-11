/* OPQ — comportamenti del sito: menu, copertina video, agenda e archivio */
(function () {
  "use strict";
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------- Menu su telefono ---------- */
  var bottoneMenu = $(".apri-menu"), nav = $("#nav");
  if (bottoneMenu && nav) {
    bottoneMenu.addEventListener("click", function () {
      var aperto = nav.classList.toggle("aperto");
      bottoneMenu.setAttribute("aria-expanded", aperto ? "true" : "false");
      bottoneMenu.textContent = aperto ? "Chiudi" : "Menu";
    });
  }

  /* ---------- Testata sovrapposta: il velo prende il colore della fascia sottostante ---------- */
  var testata = $(".testata"), copertina = $(".copertina");
  if (testata) {
    var fasce = $$("main [class*='fondo-']");
    var aggiornaTestata = function () {
      if (copertina) testata.classList.toggle("piena", window.scrollY > copertina.offsetHeight - 80);
      var y = testata.offsetHeight / 2, velo = "";
      fasce.forEach(function (f) {
        var r = f.getBoundingClientRect();
        if (r.top <= y && r.bottom > y) velo = getComputedStyle(f).backgroundColor;
      });
      if (velo) testata.style.setProperty("--velo", velo); else testata.style.removeProperty("--velo");
    };
    window.addEventListener("scroll", aggiornaTestata, { passive: true });
    window.addEventListener("resize", aggiornaTestata);
    aggiornaTestata();
  }

  /* ---------- Video di copertina: sempre in riproduzione, si alternano in dissolvenza ---------- */
  var video = $$(".copertina video");
  function suona(v) { v.muted = true; var p = v.play(); if (p && p.catch) p.catch(function () {}); }
  if (video.length) {
    video[0].classList.add("attivo");
    video.forEach(function (v, i) {
      v.addEventListener("ended", function () {
        var prossimo = video[(i + 1) % video.length];
        prossimo.currentTime = 0; suona(prossimo);
        if (prossimo !== v) { prossimo.classList.add("attivo"); v.classList.remove("attivo"); }
      });
    });
    suona(video[0]);
    // se il browser mette in pausa il video (es. scheda in background), riparte al ritorno
    document.addEventListener("visibilitychange", function () {
      if (!document.hidden) video.forEach(function (v) { if (v.classList.contains("attivo")) suona(v); });
    });
  }

  /* ---------- Eventi ---------- */
  var EVENTI = (window.EVENTI_OPQ || []).slice();
  var oggi = new Date(); oggi.setHours(0, 0, 0, 0);
  var MESI = ["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"];
  var MESI_BREVI = ["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"];
  var GIORNI = ["domenica","lunedì","martedì","mercoledì","giovedì","venerdì","sabato"];
  function dataDi(e) { var p = e.data.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function lunga(e) { var d = dataDi(e); return GIORNI[d.getDay()] + " " + d.getDate() + " " + MESI[d.getMonth()] + " " + d.getFullYear() + (e.ora ? ", ore " + e.ora : ""); }
  function breve(e) { var d = dataDi(e); return d.getDate() + "." + (d.getMonth() + 1) + "." + String(d.getFullYear()).slice(2); }
  function esc(t) { return String(t || "").replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  var futuri = EVENTI.filter(function (e) { return dataDi(e) >= oggi; }).sort(function (a, b) { return dataDi(a) - dataDi(b); });
  var passati = EVENTI.filter(function (e) { return dataDi(e) < oggi; }).sort(function (a, b) { return dataDi(b) - dataDi(a); });
  var registro = []; // eventi mostrati, per aprire la locandina

  function idDi(e) { var i = registro.indexOf(e); if (i < 0) { registro.push(e); i = registro.length - 1; } return i; }

  function rigaAgenda(e) {
    var d = dataDi(e);
    return '<li><button type="button" data-evento="' + idDi(e) + '" aria-label="' + esc(e.titolo + ", " + lunga(e)) + '">' +
      '<span class="giorno">' + d.getDate() + '<small>' + MESI_BREVI[d.getMonth()] + " " + d.getFullYear() + '</small></span>' +
      '<span class="titolo">' + esc(e.titolo) + (e.sottotitolo ? '<small>' + esc(e.sottotitolo) + '</small>' : '') + '</span>' +
      '<span class="rassegna etichetta">' + esc(e.rassegna || e.etichetta || etichettaTipo(e.tipo)) + '</span>' +
      '<img src="' + esc(e.locandina) + '" alt="" loading="lazy">' +
    '</button></li>';
  }
  function etichettaTipo(t) { return { musica: "Musica", incontri: "Incontro", feste: "Festa" }[t] || ""; }
  function schedaLocandina(e) {
    return '<li class="locandina"><button type="button" data-evento="' + idDi(e) + '">' +
      '<img src="' + esc(e.locandina) + '" alt="Locandina: ' + esc(e.titolo) + '" loading="lazy">' +
      '<span class="meta"><span class="etichetta">' + breve(e) + '</span><span class="etichetta grigio">' + esc(e.rassegna || e.etichetta || etichettaTipo(e.tipo)) + '</span></span>' +
      '<h3>' + esc(e.titolo) + '</h3>' +
    '</button></li>';
  }

  $$("[data-prossimi]").forEach(function (box) {
    if (!futuri.length) return;
    box.innerHTML = '<ul class="agenda">' + futuri.map(rigaAgenda).join("") + '</ul>';
  });
  $$("[data-ultimi]").forEach(function (ul) {
    ul.innerHTML = passati.slice(0, +ul.dataset.ultimi || 5).map(rigaAgenda).join("");
  });

  var archivio = $("[data-archivio]");
  if (archivio) {
    var conta = function (t) { return t === "tutti" ? passati.length : passati.filter(function (e) { return e.tipo === t; }).length; };
    var mostra = function (t) {
      var lista = t === "tutti" ? passati : passati.filter(function (e) { return e.tipo === t; });
      archivio.innerHTML = lista.map(schedaLocandina).join("");
    };
    mostra("tutti");
    $$(".filtri button").forEach(function (b) {
      b.addEventListener("click", function () {
        $$(".filtri button").forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
        b.setAttribute("aria-pressed", "true");
        mostra(b.dataset.filtro);
      });
    });
  }

  /* Locandina a tutto schermo */
  var dialogo = $("dialog.lightbox");
  document.addEventListener("click", function (ev) {
    var b = ev.target.closest("[data-evento]");
    if (!b || !dialogo) return;
    var e = registro[+b.dataset.evento];
    $("img", dialogo).src = e.locandina; $("img", dialogo).alt = "Locandina: " + e.titolo;
    $(".l-data", dialogo).textContent = lunga(e).replace(", ore ", " ✶ ore ");
    $("h3", dialogo).textContent = e.titolo;
    var info = [e.sottotitolo, e.rassegna ? "Rassegna " + e.rassegna : (e.etichetta || ""), e.ingresso].filter(Boolean);
    $(".l-info", dialogo).innerHTML = info.map(function (t) { return '<p class="riga-info">' + esc(t).replace(/tessera soci/i, function (m) { return '<span class="timbro">' + m + '</span>'; }) + '</p>'; }).join("");
    dialogo.showModal();
  });
  if (dialogo) {
    $(".chiudi", dialogo).addEventListener("click", function () { dialogo.close(); });
    dialogo.addEventListener("click", function (ev) { if (ev.target === dialogo) dialogo.close(); });
  }

  /* ---------- Schede della pagina eventi ---------- */
  var schede = $$("[data-scheda]");
  if (schede.length) {
    var attiva = function (nome, aggiornaUrl) {
      schede.forEach(function (b) {
        var si = b.dataset.scheda === nome;
        b.setAttribute("aria-selected", si ? "true" : "false");
        b.tabIndex = si ? 0 : -1;
        document.getElementById(b.dataset.scheda).hidden = !si;
      });
      if (aggiornaUrl && history.replaceState) history.replaceState(null, "", "#" + nome);
    };
    schede.forEach(function (b, i) {
      b.addEventListener("click", function () { attiva(b.dataset.scheda, true); });
      b.addEventListener("keydown", function (ev) {
        var d = ev.key === "ArrowRight" ? 1 : ev.key === "ArrowLeft" ? -1 : 0;
        if (!d) return;
        var n = schede[(i + d + schede.length) % schede.length]; n.focus(); attiva(n.dataset.scheda, true);
      });
    });
    var richiesta = location.hash.replace("#", "");
    var valide = schede.map(function (b) { return b.dataset.scheda; });
    attiva(valide.indexOf(richiesta) >= 0 ? richiesta : "programma", false);
  }

  /* ---------- Statuto: apri/chiudi tutti ---------- */
  var apriTutti = $("[data-apri-tutti]");
  if (apriTutti) {
    apriTutti.addEventListener("click", function () {
      var art = $$(".statuto details");
      var apri = art.some(function (d) { return !d.open; });
      art.forEach(function (d) { d.open = apri; });
      apriTutti.textContent = apri ? "Chiudi tutti gli articoli" : "Apri tutti gli articoli";
    });
  }

  /* ---------- Sezioni apribili: un link diretto (#sezione) apre la sezione giusta ---------- */
  function apriDaHash() {
    var id = decodeURIComponent(location.hash.slice(1)); if (!id) return;
    var el = document.getElementById(id); if (!el) return;
    var d = el.closest("details.apribile");
    if (d && !d.open) { d.open = true; }
    if (d) setTimeout(function () { el.scrollIntoView({ block: "start" }); }, 30);
  }
  apriDaHash();
  window.addEventListener("hashchange", apriDaHash);
  $$('a[href^="#"]').forEach(function (a) {
    a.addEventListener("click", function () { if (a.getAttribute("href") === location.hash) apriDaHash(); });
  });

  /* ---------- Mappa di Google: si carica solo su richiesta (niente cookie prima del clic) ---------- */
  $$("[data-carica-mappa]").forEach(function (b) {
    b.addEventListener("click", function () {
      var box = b.closest("[data-mappa]");
      var f = document.createElement("iframe");
      f.title = "Mappa: OPQ, Via dei Martiri 10, Cesate"; f.src = box.getAttribute("data-mappa");
      box.innerHTML = ""; box.appendChild(f); box.classList.remove("mappa-consenso");
    });
  });

  /* ---------- Eventi per Google (schema.org Event), dalla stessa lista di eventi.js ---------- */
  (function () {
    var lista = window.EVENTI_OPQ; if (!lista || !lista.length) return;
    var SITO = "https://www.opqcesate.it/";
    function fuso(d) { /* ora legale italiana: dall'ultima domenica di marzo all'ultima di ottobre */
      var y = +d.slice(0, 4), m = +d.slice(5, 7), g = +d.slice(8, 10);
      function ultimaDom(mese) { var x = new Date(Date.UTC(y, mese, 0)); return x.getUTCDate() - x.getUTCDay(); }
      var estate = (m > 3 && m < 10) || (m === 3 && g >= ultimaDom(3)) || (m === 10 && g < ultimaDom(10));
      return estate ? "+02:00" : "+01:00";
    }
    var luogo = { "@type": "Place", "name": "OPQ Opificio Culturale", "address": { "@type": "PostalAddress",
      "streetAddress": "Via dei Martiri 10", "postalCode": "20031", "addressLocality": "Cesate", "addressRegion": "MI", "addressCountry": "IT" } };
    var dati = lista.map(function (e) {
      var ev = { "@type": "Event", "name": e.titolo, "startDate": e.data + "T" + (e.ora || "21:00") + ":00" + fuso(e.data),
        "eventStatus": "https://schema.org/EventScheduled", "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
        "location": luogo, "organizer": { "@type": "Organization", "name": "OPQ Opificio Culturale", "url": SITO },
        "description": [e.sottotitolo, e.rassegna, e.ingresso].filter(Boolean).join(". ") };
      if (e.locandina) ev.image = [SITO + e.locandina.replace(/^\//, "")];
      return ev;
    });
    var tag = document.createElement("script"); tag.type = "application/ld+json";
    tag.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": dati });
    document.head.appendChild(tag);
  })();

  /* Comparsa morbida */
  if ("IntersectionObserver" in window) {
    var oss = new IntersectionObserver(function (voci) {
      voci.forEach(function (v) { if (v.isIntersecting) { v.target.classList.add("visibile"); oss.unobserve(v.target); } });
    }, { rootMargin: "0px 0px -10% 0px" });
    $$(".rivela").forEach(function (el) { oss.observe(el); });
  } else { $$(".rivela").forEach(function (el) { el.classList.add("visibile"); }); }

  $$("[data-anno]").forEach(function (n) { n.textContent = new Date().getFullYear(); });
})();
