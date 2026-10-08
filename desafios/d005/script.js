let body = document.getElementById("corpo")
let header = document.getElementById("titulo")
let main = document.getElementById("centro")
let button = document.getElementById("botao")

let click = 0

function Modo() {
    click++
    if (click % 2 == 0) {
        body.style.backgroundColor = "white"
        header.style.color = "black"
        main.style.backgroundColor = "lightgray"
        button.innerHTML = "Modo Escuro"
    } else {
        body.style.backgroundColor = "black"
        header.style.color = "white"
        main.style.backgroundColor = "white"
        button.innerHTML = "Modo Claro"
    }
}

