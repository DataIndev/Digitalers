'use strict'

windows.addEventListener("load", () => {
    var cantidadProductos, precioUnitario, precioTotal;

    cantidadProductos = Number(prompt("Ingrese la cantidad de productos comprados"));
    precioUnitario = Number(prompt("Ingrese el precio unitario del producto"));

    preciototal = cantidadProductos * precioUnitario;

    if (precioTotal > 2000) {
        precioTotal = precioTotal - precioTotal * 20 / 100;
    } else if (precioTotal > 1000) {
        precioTotal = precioTotal - precioTotal * 10 / 100;
    }

    var qs = document.querySelector("#ej5");

    qs.innerHTML = "El precio total por toda la compra es $" + precioTotal;


});