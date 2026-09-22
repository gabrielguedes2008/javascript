let num = document.getElementById("inum")
let list = document.getElementById("flista")
let resultado = document.getElementById("resultado")
let valores = []

// Verificar se é um numero
function isNumero(n) {
    // So vai aceitar valores entre 1 e 100
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

// Verificar se o numero está na lista
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function AddN() {
    // So irá ser adicionado se for um numero e não estiver na lista
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        // Adicionando o Numero na lista
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        list.appendChild(item)
    } else {
        window.alert("Numero Invalido ou ja adicionado")
    }
    // Limpa a caixa de texto
    num.value = ''
    // Deixa o Ponteiro Piscando na Caixa
    num.focus()
}

function Result() {
    if (valores.length == 0) {
        window.alert("Adicione algum número!!")
    } else {
        let tot = valores.length
        let maiorN = 0

        resultado = ''
        resultado += `<p>Ao todo foram adicionados ${tot} números cadastrados</p>`
        for(let c = 0; c <= tot; c++) {
            if (valores[c] > maioN) {
                maiorN = valores[c]
            }
        }
        resultado += `<p>O maior número informado foi ${maiorN}</p>`
    }
}