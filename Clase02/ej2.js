"use strict";

window.addEventListener("load", () => {
  var cantidadTiempo,
    diaASegundos,
    horaASegundos,
    minutoASegundos,
    cantidadDias,
    cantidadHoras,
    cantidadMinutos,
    cantidadSegundos;

  cantidadTiempo = Number(
    prompt("Ingresar una cantidad de tiempo en segundos")
  );

  diaASegundos = 86400;
  horaASegundos = 3600;
  minutoASegundos = 60;

  if (cantidadTiempo >= diaASegundos) {
    cantidadDias = cantidadTiempo / diaASegundos;
    cantidadTiempo = cantidadTiempo % diaASegundos;
  } else {
    cantidadDias = 0;
  }

  if (cantidadTiempo >= horaASegundos) {
    cantidadHoras = cantidadTiempo / horaASegundos;
    cantidadTiempo = cantidadTiempo % horaASegundos;
  } else {
    cantidadHoras = 0;
  }

  if (cantidadTiempo >= minutoASegundos) {
    cantidadMinutos = cantidadTiempo / minutoASegundos;
    cantidadTiempo = cantidadTiempo % minutoASegundos;
  } else {
    cantidadMinutos = 0;
  }

  cantidadSegundos = cantidadTiempo;

  var qs = document.querySelector("#ej2");
  qs.innerHTML =
    "La cantidad de tiempo introducida equivale a: <br>" +
    "Dias: " +
    cantidadDias.toFixed() +
    "<br>" +
    "Horas: " +
    cantidadHoras.toFixed() +
    "<br>" +
    "Minutos: " +
    cantidadMinutos.toFixed() +
    "<br>" +
    "Segundos: " +
    cantidadSegundos.toFixed() +
    "<br>";
});
