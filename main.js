import { VALID_GUESSES } from "./Paraules.js"


var buto = document.getElementsByClassName("buto")

// CELDAS
// var celda = document.getElementsByClassName("celda")

var random = VALID_GUESSES[Math.floor(Math.random() * VALID_GUESSES.length)];

var fila = document.querySelectorAll(".fila")


/*4,9,14,19,25 */

var fila1 = 0
var celda1 = 0
var contador = 0
var verds = new Array();





// ENTRADES PER TECLAT

if (fila1 <= 4) {
    if (celda1 <= 5) {
        addEventListener("keydown", (e) => {
            console.log("key: ", e.key)
            if (e.keyCode <= 90 && e.keyCode >= 65 && e.key != "Enter" && e.key != "Backspace") {
                1
                if (celda1 <= 4) {
                    fila[fila1].children[celda1].innerHTML = e.key
                    celda1++;
                }
            } else if (e.key == "Enter" && celda1 == 5 && fila1 <= 5) {
                for (let h = 0; h <= 4; h++) {
                    if (fila[fila1].children[h].innerHTML == random[h]) {

                        fila[fila1].children[h].style.backgroundColor = "green"

                        verds[h] = h

                        contador++;


                    } else if (fila[fila1].children[h].innerHTML != random[h]) {
                        for (let j = 0; j <= 4; j++) {
                            if (h != j) {
                                if (fila[fila1].children[h].innerHTML == random[j]) {
                                    
                                    fila[fila1].children[h].style.backgroundColor = "yellow"

                                }

                        }


                    }





                }

                if (contador < 5) {
                    contador = 0;
                }

                fila1++;
                celda1 = 0;

            }
            if (e.key == "Backspace") {
                fila[fila1].children[celda1 - 1].innerHTML = ""
                fila[fila1].children[celda1 - 1].style.backgroundColor = "rgba(21, 21, 21, 0.87)"

                if (celda1 > 0) {
                    celda1--;
                }

            }
            // console.log("contingut: ", fila[fila1].children[celda1].innerHTML)
            console.log(fila1)
            console.log(celda1)
            console.log("paraula: ", random)
            console.log(contador)




            if (contador == 5) {
                setTimeout(() => {
                    Swal.fire('HAS GUANYAT!')
                }, "200")
            } else if (fila1 == 5 && contador != 5) {
                setTimeout(() => {
                    Swal.fire('HAS PERDUT!')
                }, "200")
            }

        

        })
    }
}


// ENTRADES PER BUTÓ 

buto[0].addEventListener("click", (e) => {
    if (fila1 <= 4) {
        if (celda1 <= 5) {

            console.log("key: ", e.target.value)
            if (e.key != "ENTER" && e.target.value != "DEL") {
                if (celda1 <= 4) {
                    fila[fila1].children[celda1].innerHTML = e.target.value
                    celda1++;
                }
            } else if (e.target.value == "ENTER" && celda1 == 5 && fila1 <= 5) {
                for (let h = 0; h <= 4; h++) {
                    if (fila[fila1].children[h].innerHTML == random[h]) {

                        fila[fila1].children[h].style.backgroundColor = "green"

                        if (contador < 5) {
                            contador++;
                        } else if (contador > 5) {
                            contador = 0;
                        }


                    } else if (fila[fila1].children[h].innerHTML != random[h]) {
                        for (let j = 0; j <= 4; j++) {
                            if (h != j) {
                                if (fila[fila1].children[h].innerHTML == random[j]) {

                                    fila[fila1].children[h].style.backgroundColor = "yellow"
                                }
                            } else {
                                fila[fila1].children[h].style.backgroundColor = "grey"
                            }

                        }


                    }





                }

                fila1++;
                celda1 = 0;

            } else if (e.target.value == "Backspace") {
                fila[fila1].children[celda1 - 1].innerHTML = ""
                fila[fila1].children[celda1 - 1].style.backgroundColor = "rgba(21, 21, 21, 0.87)"

                if (celda1 > 0) {
                    celda1--;
                }

            }
            // console.log("contingut: ", fila[fila1].children[celda1].innerHTML)
            console.log(fila1)
            console.log(celda1)
            console.log("paraula: ", random)
            console.log(contador)
            console.log("valor: ", e.target.value)




            if (contador == 5) {
                setTimeout(() => {
                    Swal.fire('HAS GUANYAT!')
                }, "200")
            } if (fila1 == 5 && contador != 5) {
                setTimeout(() => {
                    Swal.fire('HAS PERDUT!')
                }, "200")
            }




        }
    }


})