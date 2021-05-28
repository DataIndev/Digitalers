"use strict";

window.addEventListener("load", () => {
    var name = prompt("Ingrese el Nombre")
    var lastName = prompt("Ingrese el Apellido")

    var qs = document.querySelector("#ej2")

    name = name.charAt(0).toUpperCase() + name.slice(1);
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

    qs.innerHTML = "Nombre Completo: "+name+", "+lastName;
});
