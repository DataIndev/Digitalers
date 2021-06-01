'use strict'

window.addEventListener("load", () => {
    var oferta1, oferta2, oferta3, oferta4;

    alert("Ingrese las 4 ofertas hechas y el sistema le dira cual es la mayor");
    oferta1 = Number(prompt());
    oferta2 = Number(prompt());
    oferta3 = Number(prompt());
    oferta4 = Number(prompt());

    var qs = document.querySelector("#ej6");

    if (oferta1 >= oferta2 && oferta1 >= oferta3 && oferta1 >= oferta4) {
        qs.innerHTML = "Oferta 1 es la mayor, su valor es: " + oferta1

    } else if (oferta2 >= oferta1 && oferta2 >= oferta3 && oferta2 >= oferta4) {
        qs.innerHTML = "Oferta 2 es la mayor, su valor es: " + oferta2
    } else if (oferta3 >= oferta1 && oferta3 >= oferta2 && oferta3 >= oferta4) {
        qs.innerHTML = "Oferta 3 es la mayor, su valor es: " + oferta3
    } else {
        qs.innerHTML = "Oferta 4 es la mayor, su valor es: " + oferta4

    }


});