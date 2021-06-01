"use strict";

window.addEventListener("load", () => {
  var minutos, internacional, pago;

  minutos = Number(
    prompt("Ingrese la cantidad de minutos que demoro la llamada")
  );
  internacional = confirm("La llamada fue internacional?");
  console.log(internacional);

  if (minutos < 5) {
    pago = minutos * 0.6;
  } else {
    pago = 3;
  }

  if (minutos < 15) {
    pago = pago + (minutos - 5) * 0.5;
  } else {
    pago = pago + 5 + (minutos - 15) * 0.4;
  }

  if(internacional){
      pago = pago + minutos *0.4;
  }

  var qs = document.querySelector("#ej10");
  qs.innerHTML = "El total a pagar por la llamada es: " + pago;
});
