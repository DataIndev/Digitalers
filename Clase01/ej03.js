"use strict";

window.addEventListener("load", () => {
  var high = Number(prompt("Ingresar la altura del rectangulo en centimetros "));
  var width = Number(prompt("Ingresar el ancho del rectangulo en centimetros "));

  var perimeter = (high * 2) + (width * 2);
  var area = high * width;

  var qs = document.querySelector("#ej3");

  qs.innerHTML = "El perimetro del rectangulo es igual "+perimeter+" cm, y el area igual a: "+area+" cm2";

});
