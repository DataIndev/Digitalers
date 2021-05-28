"use strict";

window.addEventListener("load", () => {
  var alto,
    ancho,
    profundidad,
    volumen,
    relacionM3L,
    relacionLGal,
    cantidadLitros,
    cantidadGalones;

  relacionM3L = 1000;
  relacionLGal = 0.264172;

  alto = Number(prompt("Ingrese el alto de la pileta"));
  ancho = Number(prompt("Ingrese el ancho de la pileta"));
  profundidad = Number(prompt("Ingrese la profundidad de la pileta"));

  volumen = alto * ancho * profundidad;
  cantidadLitros = volumen * relacionM3L;
  cantidadGalones = cantidadLitros * relacionLGal;

  var qs = document.querySelector("#ej11");
  qs.innerHTML = "La cantidad de litros de agua necesarios para llenar la pileta son: " +cantidadLitros + "<br>" + "La cantidad de galones de agua necesarios para llenar la pileta son: " + cantidadGalones;

});
