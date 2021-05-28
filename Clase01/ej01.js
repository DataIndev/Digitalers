'use strict'

window.addEventListener("load", () => {

    var n1 = Number(prompt("Ingresar el dividendo"));
    var n2 = Number(prompt("Ingresar el divisors"));

    var division = n1/n2;

    var qs1 = document.querySelector("#ej1");
    qs1.innerHTML = "El resultado de la operación es igual a: " +division
  
});