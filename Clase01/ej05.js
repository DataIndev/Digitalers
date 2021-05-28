'use strict'

window.addEventListener("load", () => {
    var distKm = 0;
    var relacionMiKm = 1.60934;

    var distMil = Number(prompt("Ingrese una distancia en millas"));

    distKm = distMil * relacionMiKm;

    var qs = document.querySelector("#ej5");
    qs.innerHTML = "La distancia provista en kilometros es: " + distKm;
});