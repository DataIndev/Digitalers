"use strict";

window.addEventListener("load", () => {
  var total = 0;
  const year = 12;

  for (let index = 1; index <= year; index++) {
    let month = Number(prompt("Ingrese el monton correspondiente al mes Nº " + index));
    total += month;
  }

  var qs = document.querySelector("#ej02");
  qs.innerHTML = "Dinero ahorrado en un (1) año: $" + total.toFixed();
});
