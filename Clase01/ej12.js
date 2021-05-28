"use strict";

window.addEventListener("load", () => {
  var cantidadHoras, precioHora, pago;

  cantidadHoras = Number(
    prompt("Ingrese la cantidad de horas que el auto estuvo estacionano ")
  );
  precioHora = Number(prompt("Ingrese el precio por hora del estacionamiento"));

  pago = Math.round(cantidadHoras) * precioHora; //  ! REDONDEO CANTIDAD DE HORAS

  var qs = document.querySelector("#ej12");

  qs.innerHTML = "El monto que debe pagar el conductor es: " + pago;
});
