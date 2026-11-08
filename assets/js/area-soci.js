/* =========================================================
   OPQ — Area soci (VERSIONE DIMOSTRATIVA)
   ---------------------------------------------------------
   Oggi la tessera viene costruita con i dati inseriti nel
   modulo, senza alcun controllo: serve solo a mostrare
   l'aspetto della pagina.

   Per renderla reale serve un elenco soci online e un vero
   accesso (es. Supabase o Firebase con link via email).
   La funzione da sostituire è `cercaSocio()` qui sotto.
   ========================================================= */
(function () {
  "use strict";
  var griglia = document.querySelector(".soci-griglia");
  if (!griglia) return;
  var form = griglia.querySelector("form.accesso");
  var errore = form.querySelector(".errore");
  var azioni = griglia.querySelector(".tessera-azioni");
  var CHIAVE = "opq-socio-demo";

  // DEMO: ricava un nome leggibile dall'email (mario.rossi@... -> Mario Rossi)
  function cercaSocio(email, numero) {
    var locale = email.split("@")[0].replace(/[0-9_]+/g, " ").replace(/[.\-]+/g, " ").trim();
    var nome = locale ? locale.split(/\s+/).map(function (p) { return p.charAt(0).toUpperCase() + p.slice(1).toLowerCase(); }).join(" ") : "Socio OPQ";
    return Promise.resolve({
      nome: nome,
      numero: String(numero).replace(/\D/g, "").padStart(4, "0").slice(-6) || "0000",
      anno: String(new Date().getFullYear()),
      tipo: "Socio ordinario",
      valida: true
    });
  }

  function campo(n) { return griglia.querySelector('[data-t="' + n + '"]'); }

  function mostra(s) {
    campo("nome").textContent = s.nome;
    campo("numero").textContent = s.numero;
    campo("anno").textContent = s.anno;
    campo("tipo").textContent = s.tipo;
    campo("stato").innerHTML = '<span class="pallino"></span>' + (s.valida ? "Valida" : "Scaduta");
    campo("stato").classList.toggle("scaduta", !s.valida);
    var qr = campo("qr");
    qr.innerHTML = "";
    if (window.qrcode) {
      var q = window.qrcode(0, "M");
      q.addData("OPQ|" + s.numero + "|" + s.anno);
      q.make();
      qr.innerHTML = q.createSvgTag({ cellSize: 4, margin: 0, scalable: true });
    }
    griglia.dataset.vista = "tessera";
    azioni.hidden = false;
  }

  form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var email = form.email.value.trim(), numero = form.numero.value.trim();
    if (!email || !numero) { errore.hidden = false; return; }
    errore.hidden = true;
    cercaSocio(email, numero).then(function (s) {
      try { localStorage.setItem(CHIAVE, JSON.stringify(s)); } catch (e) {}
      mostra(s);
      griglia.querySelector(".tessera").scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });

  griglia.querySelector("[data-esci]").addEventListener("click", function () {
    try { localStorage.removeItem(CHIAVE); } catch (e) {}
    griglia.dataset.vista = "accesso";
    azioni.hidden = true;
    form.reset();
    campo("nome").textContent = "Nome Cognome";
    campo("numero").textContent = "0000";
    campo("qr").innerHTML = "";
  });

  // Se ci si era già "collegati" su questo dispositivo, mostra subito la tessera
  try { var salvato = JSON.parse(localStorage.getItem(CHIAVE) || "null"); if (salvato) mostra(salvato); } catch (e) {}
})();
