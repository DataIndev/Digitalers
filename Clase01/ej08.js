'use strict'

window.addEventListener("load", () => {

    var cantidadPesos, cantidadDolares, cantidadEuros;
    var relacionPesoDolar, relacionPesoEuro;

    relacionPesoDolar = 20, relacionPesoEuro = 25;

    cantidadPesos = Number(prompt("Ingrese una cantidad de pesos a convertir"));

    cantidadDolares = cantidadPesos / relacionPesoDolar;
    cantidadEuros = cantidadPesos / relacionPesoEuro;

    var qs = document.querySelector("#ej8");
    qs.innerHTML = "La cantidad de pesos provista es equivalente a  la siguiente cantidad de dolares: " + cantidadDolares + "<br>" +
        "La cantidad de pesos provista es equivalente a la siguiente cantidad de euros: " + cantidadEuros;


});