
const num = [3, -1, 0, 5, 7]

function filtrernum(numeros){
    return numeros.filter(x => x >= 0)
}

console.log(filtrernum(num))

// opcion 2 arrow function anonima

const filtrarnum = numeros => numeros.filter(x => x >= 0)

const num2 = [3, -1, 0, 5, 7]
console.log(filtrarnum(num2))