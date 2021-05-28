"use strict";



window.addEventListener("load", () => {
  var radio = Number(prompt("Ingresar el radio del circulo en centimetros "));

  const pi = 3.141592;

  var perimeter = 2 * pi * radio;
  var area = pi * Math.pow(radio,2);

  var qs = document.querySelector("#ej4");

  qs.innerHTML = "El perimetro del circulo es igual "+perimeter.toFixed(2)+" cm, y el area igual a: "+area.toFixed(2)+" cm2";

});