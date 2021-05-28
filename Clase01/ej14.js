'use strict'

window.addEventListener("load", () => {

    var distanciaRecorrida,tiempoEmpleado,relacionMHoraDecimal,tiempoDecimal,velocidadPromedio;
    relacionMHoraDecimal = 60;

    distanciaRecorrida = Number(prompt("Ingrese la distancia recorrida (en km)"));

    tiempoEmpleado = Number(prompt("Ingrese el tiempo empleado para ello (en minutos)"));

    tiempoDecimal = tiempoEmpleado / relacionMHoraDecimal;

    velocidadPromedio = distanciaRecorrida / tiempoDecimal;

    var qs = document.querySelector("#ej14");

    qs.innerHTML = "La velocidad promedio empleada es: " + velocidadPromedio + " Km/Hrs";


});