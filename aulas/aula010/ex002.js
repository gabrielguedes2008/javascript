var dia = new Date()
var diaSem = dia.getDay()
 switch (diaSem) {
    case diaSem = 0:
        console.log('Hoje é Domingo!')
        break
    case diaSem = 1:
        console.log('Hoje é Segunda-Feira!')
    case diaSem = 2:
        console.log('Hoje é Terça-Feira!')
        break
    case diaSem = 3:
        console.log('Hoje é Quarta-Feira!')
    case diaSem = 4:
        console.log('Hoje é Quinta-Feira!')
        break
    case diaSem = 5:
        console.log('Hoje é Sexta-Feira!')
        break
    case diaSem = 6:
        console.log('Hoje é Sabado!')
        break
 }