"use strict";

window.addEventListener("load", () => {
  var cantidadKilos,
    pago,
    nacional,
    americaOEuropa,
    zonaMetropolitana,
    patagonia,
    caba,
    microcentro;

    var qs = document.querySelector("#ej12");
    qs.innerHTML = 

  cantidadKilos = Number(
    prompt("Ingrese la cantidad de kilos que desea enviar")
  );

  if (cantidadKilos <= 15 && cantidadKilos > 0) {
    alert("Responda Verdadero o Falso a las siguientes afirmaciones");
    nacional = confirm("El envio se hara dentro del territorio argentino?");

    if (nacional) {
      zonaMetropolitana = confirm(
        "El envio se hara dentro de la zona metropolitana (CABA y Gran Buenos Aires)"
      );
      if (zonaMetropolitana) {
        caba = confirm("El envio se hara dentro de la zona de Capital Federal");
        if (caba) {
          microcentro = confirm("El envio se hara a la zona de Microcento");
          if (microcentro) {
            pago = cantidadKilos * 15;
          } else {
            pago = cantidadKilos * 20;
          }
        } else {
          pago = cantidadKilos * 30;
        }
      } else {
        patagonia = confirm("El envio se hara a la Patagonia");
        if (patagonia) {
          pago = cantidadKilos * 60;
        } else {
          pago = cantidadKilos * 50;
        }
      }
    } else {
      americaOEuropa = confirm(
        "El envio se hara a un pais dentro de America o Europa"
      );
      if (americaOEuropa) {
        pago = cantidadKilos * 200;
      } else {
        pago = cantidadKilos * 300;
      }
    }

    qs.innerHTML = "La cantidad que debe abonar es $"+pago;

  }
  else{
      qs.innerHTML = "La cantidad provista se encuentra por fuera del rango aceptado"
  }
});
