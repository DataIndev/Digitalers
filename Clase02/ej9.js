'use strict'

window.addEventListener("load", () => {
    var turistas,totalMicro,totalExcursion,pagoPorPersona;

    turistas = Number(prompt("Ingrese la cantidad de turistas que iran a la excursion"));

    totalMicro = 3000;

    if (turistas> 35){
        totalExcursion = turistas * 40;
    }
    else if (turistas>25){
        totalExcursion = turistas *45;
    }
    else{
        totalExcursion = turistas * 50;
        
    }

    pagoPorPersona = (totalMicro + totalExcursion) / turistas;

    var qs = document.querySelector("#ej9");
    qs.innerHTML = "Lo que cada persona debe pagar para cubrir los gastos es : "+pagoPorPersona;
});