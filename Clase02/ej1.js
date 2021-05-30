"use strict";

window.addEventListener("load", () => {
  var numeroArabigo = Number(
    prompt(
      "Ingrese un numero del 1 al 10 y el sistema lo convertira a numero romano"
    )
  );

  var qs = document.querySelector("#ej1");

  if (numeroArabigo >= 1 && numeroArabigo <= 10) {
    if (numeroArabigo > 5) {
      if (numeroArabigo >= 7) {
        if (numeroArabigo >= 8) {
          if (numeroArabigo >= 9) {
            if (numeroArabigo == 10) {
              qs.innerHTML = "Numero Arabigo --> " +numeroArabigo+ " | Numero Romano --> " + " X ";
            } else {
                qs.innerHTML = "Numero Arabigo --> " +numeroArabigo+ " | Numero Romano --> " + " IX ";
            }
          } else {
            qs.innerHTML = "Numero Arabigo --> " +numeroArabigo+ " | Numero Romano --> " + " VIII ";
          }
        }
        else{
            qs.innerHTML = "Numero Arabigo --> " +numeroArabigo+ " | Numero Romano --> " + " VII ";
        }
        }
        else{
            qs.innerHTML = "Numero Arabigo --> " +numeroArabigo+ " | Numero Romano --> " + " VI ";
        }
      }
    else {
      if (numeroArabigo >= 2) {
        if (numeroArabigo >= 3) {
          if (numeroArabigo >= 4) {
            if (numeroArabigo == 5) {
                qs.innerHTML = "Numero Arabigo --> " +numeroArabigo+ " | Numero Romano --> " + " V ";
            } else {
                qs.innerHTML = "Numero Arabigo --> " +numeroArabigo+ " | Numero Romano --> " + " IV ";
            }
          } else {
            qs.innerHTML = "Numero Arabigo --> " +numeroArabigo+ " | Numero Romano --> " + " III ";
          }
        } else {
            qs.innerHTML = "Numero Arabigo --> " +numeroArabigo+ " | Numero Romano --> " + " II ";
        }
      } else {
        qs.innerHTML = "Numero Arabigo --> " +numeroArabigo+ " | Numero Romano --> " + " I ";
      }
    }
  }
  else{
      alert("Fuera del rango");
  }


});
