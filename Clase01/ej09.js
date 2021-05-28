'use strict'

window.addEventListener("load", () => {

    var nota1, nota2,nota3,promedio;

    nota1 = Number(prompt("Ingrese la primera nota"));
    nota2 = Number(prompt("Ingrese la segunda nota"));
    nota3 = Number(prompt("Ingrese la tercer nota"));

    promedio = (nota1 + nota2 + nota3) / 3;

    var qs = document.querySelector("#ej9");
    qs.innerHTML = "El promedio de la materia es: " + promedio;
  
});