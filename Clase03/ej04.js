"use strict";

window.addEventListener("load", () => {
  var val0 = 0;
  var val1 = 1;
  var pos;
  var temp;

  pos = Number(prompt("Ingrese la posición en la secuencia de Fibonacci"));

  var n = 1;
  document.write(val0 + "<br><br>");
  document.write(val1 + "<br><br>");

  do {
    temp = val0 + val1;
    val0 = +val1;
    val1 = temp;

    document.write(temp + "<br><br>");
    n++;
  } while (n < pos - 1);

  document.write("El valor en la posicion Nº " + pos + " es igual a: " + temp);
});
