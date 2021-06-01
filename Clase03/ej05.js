'use strict'

window.addEventListener("load", () => {

    const valor = 15;
    for (let index = 1; index <= valor; index++) {
        if (index % 3 == 0 && index % 5 ==0) {
            document.write("FizzBuzz <br>");
            
        }
        else if(index % 3 ==0){
            document.write("Fizz <br>");
        }
        else if(index % 5 ==0){
            document.write("Buzz <br>");
        }
        else{
            document.write(index+ "<br>");
        }
        
    }
  
});