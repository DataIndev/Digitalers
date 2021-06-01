'use strict'

window.addEventListener("load", () => {

    var peso, altura, indice;

    peso = Number(prompt("Ingrese su peso en kilogramos"));

    altura = Number(prompt("Ingrese su altura en metros"));

    indice = peso / (altura * altura);

    var qs = document.querySelector("#ej7");
    if (indice >= 18.5 && indice <= 25) {
        qs.innerHTML = "Su peso es normal, su indice de masa corporal es : " + indice.toFixed();
    } else if (indice < 18.5) {
        qs.innerHTML = "Ud. tiene bajo peso, su indice de masa corporal es : " + indice.toFixed();

    } else {
        qs.innerHTML = "Ud. tiene sobrepeso, su indice de masa corporal es : " + indice.toFixed();

    }
});