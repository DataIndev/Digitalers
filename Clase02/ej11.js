"use strict";

window.addEventListener("load", () => {
  var cantidadHoras, pago;

  cantidadHoras = Number(
    prompt("Ingrese la cantidad de horas que el auto estuvo estacionado")
  );

  if (cantidadHoras < 2) {
    pago = cantidadHoras * 40;
  } else if (cantidadHoras < 5) {
    pago = 80 + (cantidadHoras - 2) * 30;
  }

  else if(cantidadHoras <= 9){
      pago = 170 + (cantidadHoras -5)*25;
  }
  else if(cantidadHoras >= 10 && cantidadHoras < 24){
      pago = 300
  }
  else{
      pago = 500;
  }

  var qs = document.querySelector("#ej11");

  qs.innerHTML = "Ud. deberá abonar $ " + pago;
});
