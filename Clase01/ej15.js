'use strict'

window.addEventListener("load", () => {

    var distanciaRecorrida,cantidadLitrosComienzo,cantidadLitrosFinal,cantidadLitrosConsumidos,distanciaPorLitro;

    distanciaRecorrida = Number(prompt("Ingrese la distancia recorrida (en km)"));

    cantidadLitrosComienzo = Number(prompt("Ingrese la cantidad de litros de nafta al comenzar el viaje"));

    cantidadLitrosFinal = Number(prompt("Ingrese la cantidad de litros de nafta al finalizar el viaje"));

    cantidadLitrosConsumidos = cantidadLitrosComienzo - cantidadLitrosFinal;

    distanciaPorLitro = distanciaRecorrida / cantidadLitrosConsumidos;

    var qs = document.querySelector("#ej15");
    qs.innerHTML = "La cantidad de kilometros recorrido por litro de nafta es : "+ distanciaPorLitro;


});