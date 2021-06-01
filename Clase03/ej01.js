"use strict";

window.addEventListener("load", () => {
  var tiempo = Number(prompt("Ingresar tiempo de la cuenta regresiva"));

  if (tiempo > 0 && tiempo != null) {
      do {
          document.write("Tiempo: "+tiempo+"<br><br>");
          
          tiempo--;
          
      } while (tiempo != 0);

      document.write("Largaron!");

  }
});
