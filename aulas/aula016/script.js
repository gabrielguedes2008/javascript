let num = 2

function calc(n) {
    if (n % 2 == 0) {
        return "PAR"
    } else { 
        return "IMPAR"
    }

}

console.log(`O numero ${num} é ${calc(num)}`)