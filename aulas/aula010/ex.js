var horaA = new Date()
var hora = horaA.getHours()
console.log(`Agora são ${hora} horas`)

if (hora >= 6 && hora < 12) {
    console.log('Já é de manhã')
} else if (hora >= 12 && hora <= 18) {
    console.log('Já é de tarde')
} else {
    console.log('Já de noite')
}