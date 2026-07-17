var texto = document.getElementById('result')
var horaagora = new Date()
var hora = horaagora.getHours() 
var imagens = document.getElementById('imagem')

if (hora >= 6 && hora < 12) {
    texto.innerText = `Agora são ${hora}`
} else if (hora >= 12 && hora <= 18) {
    texto.innerText = `Agora são ${hora}`
} else {
    texto.innerText = `Agora são ${hora}`
}

console.log(hora)