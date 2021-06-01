'use strict'

window.addEventListener("load", () => {
    var marca,tipo,precio;

    marca = prompt("Ingrese la marca del vino");

    tipo = prompt("Ingrese el tipo del vino")

    precio = 50;

    if (marca == 'A' || marca == 'a'){
        precio = precio +30;
    }
    else{
        precio = precio +40;
    }

    if(tipo == 'Tinto' || tipo == 'tinto'){
        precio = precio + 20;
    }
    else{
        precio = precio + 10;
    }

    var qs = document.querySelector("#ej8");

    qs.innerHTML = "El precio del vino " + tipo +" de la marca " + marca + " es $" + precio;

});