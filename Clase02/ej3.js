'use strict'
window.addEventListener("load", () => {


    var cantidadInvitados, personasPorMesa, cantidadMesas, personasMesaIncompleta;

    cantidadInvitados = Number(prompt("Introduzca la cantidad de invitados a la fiesta"));

    personasPorMesa = Number(prompt("Introduzca la cantidad de personas que entran en una mesa?"));

    cantidadMesas = (cantidadInvitados / personasPorMesa);
    personasMesaIncompleta = cantidadInvitados % personasPorMesa;

    var qs = document.querySelector("#ej3");

    if (personasMesaIncompleta == 0) {

        qs.innerHTML = "La cantidad de mesas necesarias es: " + cantidadMesas + "<br>"
        "Una mesa quedara incompleta, tendra la siguiente cantidad de comensales: " + personasMesaIncompleta;
    }

});