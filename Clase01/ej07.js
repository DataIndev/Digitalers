'use strict'

window.addEventListener("load", () => {


    var temperaturaFahrenheit = Number(prompt("Ingrese una temperatura en grados Fahrenheit"));

    var temperaturaCelsius = (temperaturaFahrenheit - 32) * 5 / 9;

    var qs = document.querySelector("#ej7");
    qs.innerHTML = "La temperatura ingresada en grados Celsius es: " + temperaturaCelsius.toFixed(2) + " ºC";


});