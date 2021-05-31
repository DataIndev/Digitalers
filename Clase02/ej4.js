'use strict'

window.addEventListener("load", () => {
    var cantidadProductos, precioUnitario, precioTotal;

    cantidadProductos = Number(prompt("Ingrese la cantidad de productos comprados"));

    precioUnitario = Number(prompt("Ingrese el precio unitario del producto"));

    if (cantidadProductos <= 100) {
        precioTotal = cantidadProductos * precioUnitario;
    } else {
        precioTotal = cantidadProductos * precioUnitario - cantidadProductos * precioUnitario * 15 / 100;
    }

    var qs = document.querySelector("#ej4");

    qs.innerHTML = "El precio total por toda la compra es  $" + precioTotal + "<br>"

});