
function verif() {
    var anot = new Date()
    var anoAT = anot.getFullYear()
    var anoNA = document.getElementById('anoNas')
    anoNA = Number(anoNA.value)
    var imagem = document.getElementById('imagem')
    var texto = document.getElementById('text')
    var sexoM = document.getElementById('sexM').checked
    var sexoF = document.getElementById('sexF').checked
    var idade = anoAT - anoNA
    
    if (idade >= 0 && idade <= 5 && sexoM == true) {
        texto.innerHTML = `Detectamos um bebe de ${idade} anos`
        imagem.style.display = 'inline-block'
        imagem.src = 'imgs/babyM-0a5.jpg'
    } else if (idade >= 0 && idade <= 5 && sexoF == true) {
        texto.innerHTML = `Detectamos uma bebe de ${idade} anos`
        imagem.style.display = 'inline-block'
        imagem.src = 'imgs/babyF-0a5.jpg'
    } else if (idade >= 6 && idade <= 10 && sexoM == true) {
        texto.innerHTML = `Detectamos um menino de ${idade} anos`
        imagem.style.display = 'inline-block'
        imagem.src = 'imgs/boy-5a10.jpg'
    } else if (idade >= 6 && idade <= 10 && sexoF == true) {
        texto.innerHTML = `Detectamos uma menina de ${idade} anos`
        imagem.style.display = 'inline-block'
        imagem.src = 'imgs/girl-5a10.jpg'
    } else if (idade >= 11 && idade <= 15 && sexoM == true) {
        texto.innerHTML = `Detectamos um pre adolecente de ${idade} anos`
        imagem.style.display = 'inline-block'
        imagem.src = 'imgs/TenM-10a15.jpg'
    } else if (idade >= 11 && idade <= 15 && sexoF == true) {
        texto.innerHTML = `Detectamos uma pre adolecente de ${idade} anos`
        imagem.style.display = 'inline-block'
        imagem.src = 'imgs/TenF-10a15.jpg'
    } else if (idade >= 16 && idade <= 20 && sexoM == true) {
        texto.innerHTML = `Detectamos um jovem adulto de ${idade} anos`
        imagem.style.display = 'inline-block'
        imagem.src = 'imgs/PreAdultM-15a20.jpg'
    } else if (idade >= 16 && idade <= 20 && sexoF == true) {
        texto.innerHTML = `Detectamos uma jovem adulto de ${idade} anos`
        imagem.style.display = 'inline-block'
        imagem.src = 'imgs/PreAdultF-15a20.jpg'
    } else if (idade >= 21 && idade <= 50 && sexoM == true) {
        texto.innerHTML = `Detectamos um homem de ${idade} anos`
        imagem.style.display = 'inline-block'
        imagem.src = 'imgs/AdultM-20a50.jpg'
    } else if (idade >= 21 && idade <= 50 && sexoF == true) {
        texto.innerHTML = `Detectamos uma mulher de ${idade} anos`
        imagem.style.display = 'inline-block'
        imagem.src = 'imgs/AdultF-20a50.jpg'
    } else if (idade >= 51 && sexoM == true) {
        texto.innerHTML = `Detectamos um senhor de ${idade} anos`
        imagem.style.display = 'inline-block'
        imagem.src = 'imgs/OldM-50a100.jpg'
    } else if (idade >= 51 && sexoF == true) {
        texto.innerHTML = `Detectamos uma senhora de ${idade} anos`
        imagem.style.display = 'inline-block'
        imagem.src = 'imgs/OldF-50a100.jpg'
    }
    
}

