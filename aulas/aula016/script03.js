function Fatorial(num) {
    for(let c = num - 1 ; c > 1; c--) {
        num = num * c 
    }
    return num
}

console.log(Fatorial(3))