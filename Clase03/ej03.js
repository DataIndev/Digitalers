'use strict'

window.addEventListener("load", () => {
    var val = Number(prompt("Ingrese al numero, el cual desea calcular su Factorial"));
    var fact = 1;

    for (var i = 1; i <= val; i++) {
        fact = fact * i;
    }

    var qs = document.querySelector("#ej03");

    qs.innerHTML = "El factorial del Numero \""+val+"\""+ " es igual a: " + fact;
})