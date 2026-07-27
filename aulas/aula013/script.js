function calc() {
    var tabuada = Number(document.getElementById('tabI').value)
    var c = 1
    var conta = 0
    var result = document.getElementById('result')

    do {
        conta = tabuada * c
        result.innerHTML += `${tabuada} x ${c}: ${conta}<br>`
        c++
    } while (c <= 10)
}