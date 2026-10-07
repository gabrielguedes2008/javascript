let num = document.getElementById("numero")


function Menor() {
    let numero = Number(num.textContent)
    numero += -1
    num.innerHTML = numero
}

function Reset() {
    num.innerHTML = 0
}

function Maior() {
    let numero = Number(num.textContent)
    numero += 1
    num.innerHTML = numero
}