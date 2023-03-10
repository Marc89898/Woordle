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

// ENTRADES PER TECLAT

if (fila1 <= 4) {
    if (celda1 <= 5) {
        addEventListener("keydown", (e) => {

            if (e.keyCode <= 90 && e.keyCode >= 65 && e.key != "Enter" && e.key != "Backspace") {

                if (celda1 <= 4) {
                    fila[fila1].children[celda1].innerHTML = e.key
                    celda1++;
                }
            } else if (e.key == "Enter" && celda1 == 5 && fila1 <= 4) {
                var posicionsVerds = []
                for (let h = 0; h <= 4; h++) {
                    if (fila[fila1].children[h].innerHTML == random[h]) {
                        fila[fila1].children[h].style.backgroundColor = "green"
                        posicionsVerds.push(h)
                        contador++;
                    }
                }
                for (let h = 0; h <= 4; h++) {
                    if (fila[fila1].children[h].innerHTML != random[h]) {
                        for (let j = 0; j <= 4; j++) {
                            if (fila[fila1].children[h].innerHTML == random[j] && !posicionsVerds.includes(j)) {
                                fila[fila1].children[h].style.backgroundColor = "yellow"
                            }
                        }
                    }
                }
                if (contador != 5) {
                    contador = 0;
                }
                fila1++;
                celda1 = 0;
            } else if (e.key == "Backspace") {
                fila[fila1].children[celda1 - 1].innerHTML = ""
                fila[fila1].children[celda1 - 1].style.backgroundColor = "grey"

                if (celda1 > 0) {
                    celda1--;
                }

            }

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


// ENTRADA PER CLICK

for(let x = 0; x < buto.length; x++){
    if (fila1 <= 4) {
        if (celda1 <= 5) {
            buto[x].addEventListener("click", (e) => {

                // IMPRIMIMOS EL VALOR DEL BOTON
                console.log(e.target.innerHTML)

                if (e.target.innerHTML != "ENTER" && e.target.innerHTML != "DEL") {

                    if (celda1 <= 4) {

                        fila[fila1].children[celda1].innerHTML = e.target.innerHTML
                        celda1++;
                    }
                } else if (e.target.innerHTML == "ENTER" && celda1 == 5 && fila1 <= 4) {
                    var posicionsVerds = []
                    for (let h = 0; h <= 4; h++) {

                        if (fila[fila1].children[h].innerHTML == random[h].toUpperCase()) {
                            fila[fila1].children[h].style.backgroundColor = "green"
                            posicionsVerds.push(h)
                            contador++;
                        }
                    }
                    for (let h = 0; h <= 4; h++) {
                        if (fila[fila1].children[h].innerHTML != random[h].toUpperCase()) {
                            for (let j = 0; j <= 4; j++) {
                                if (fila[fila1].children[h].innerHTML == random[j].toUpperCase() && !posicionsVerds.includes(j)) {
                                    fila[fila1].children[h].style.backgroundColor = "yellow"
                                }
                            }
                        }
                    }
                    if (contador != 5) {
                        contador = 0;
                    }
                    fila1++;
                    celda1 = 0;
                } else if (e.target.innerHTML == "DEL") {
                    fila[fila1].children[celda1 - 1].innerHTML = ""
                    fila[fila1].children[celda1 - 1].style.backgroundColor = "grey"
    
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
}