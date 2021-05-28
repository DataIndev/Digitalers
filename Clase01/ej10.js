"use strict";

window.addEventListener("load", () => {
  var cantidadHoras, tarifaHora, pago;

  cantidadHoras = parseInt(
    prompt("Ingrese la cantidad de horas trabajadas por el consultor")
  );

  tarifaHora = parseFloat(prompt("Ingrese la tarifa horaria del consultor"));

  pago = cantidadHoras * tarifaHora;

  var qs = document.querySelector("#ej10");
  qs.innerHTML = "Al consultor de le debe pagar la siguiente cantidad de dinero: $ "+pago.toFixed(2);
});
