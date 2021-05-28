'use strict'

window.addEventListener("load", () => {

    var medidaPulgadas = 0;
    var medidaCentimetros = 0;

    var relacionPuCm = 2.54;

    medidaPulgadas = Number(prompt("Ingrese una medida en pulgadas"));

    medidaCentimetros = medidaPulgadas * relacionPuCm;

    var qs = document.querySelector("#ej6");
    qs.innerHTML = "La medida provista en centimetros es: " + medidaCentimetros;



});