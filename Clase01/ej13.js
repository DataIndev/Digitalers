'use strict'

window.addEventListener("load", () => {
  
    var precioInicial,porcentajeDescuento,precioConDescuento,porcentajeIVA,precioConIVA;

    porcentajeIVA = 21;

    precioInicial = Number(prompt("Ingrese el precio inicial de la prenda"));

    porcentajeDescuento = Number(prompt("Ingrese el descuento a aplicar"));

    precioConDescuento = precioInicial - (precioInicial * porcentajeDescuento /100);
    precioConIVA = precioConDescuento + (precioConDescuento * porcentajeIVA /100);

    var qs = document.querySelector("#ej13");
    qs.innerHTML = "El precio final de la prenda es: $ " + precioConIVA;

});