function calc() {
    let num = Number(document.getElementById('txtn').value)
    let tab = document.getElementById('seltab')

    if (num == 0) {
        window.alert("Erro!! Digite um valor")
    } else {
        let c = 1
        tab.innerHTML = ' '
        do {
            let item = document.createElement('option')
            item.text = `${num} x ${c}: ${num * c}`
            tab.appendChild(item)
            c++
        } while ( c <= 10)
    }
}