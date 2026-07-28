function contar() {
    var inicio = Number(document.getElementById('stI').value)
    var fim = Number(document.getElementById('enI').value)
    var passo = Number(document.getElementById('passI').value)
    var titulo = document.getElementById('title')
    var result = document.getElementById('result')

    if (inicio == 0 || fim == 0 ) {
        window.alert("Impossivel de Contar!!")
    } else {
            titulo.innerText = "Contando..."
    if (inicio < fim )  
        if (passo == 0) {
            window.alert("PASSO NÂO PODE SER 0, PASSO 1")
            while (inicio <= fim) {
            result.innerHTML += `${inicio}..    `
            inicio++
        }
        } else {
            while (inicio <= fim) {
            result.innerHTML += `${inicio}..    `
            inicio = inicio + passo
        }

    
    }
    if (inicio > fim) 
        if (passo == 0) {
            window.alert("PASSO NÂO PODE SER 0, PASSO 1")
            while (inicio >= fim) {
            result.innerHTML += `${inicio}..    `
            inicio--
        }
        } else {
            while (inicio >= fim) {
            result.innerHTML += `${inicio}..    `
            inicio = inicio - passo
        }
    }
    }
   
}