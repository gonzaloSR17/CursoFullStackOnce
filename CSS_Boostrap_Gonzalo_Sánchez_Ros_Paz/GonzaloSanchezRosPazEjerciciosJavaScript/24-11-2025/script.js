let numeroAnterior = 0;
let numeroSiguiente = 1;
let numeroActual = 0;

// Serie fibinacci
let cantidad = 15

// array

let fibonacci = []

fibonacci.push(0)
fibonacci.push(1)

// generar resto de numeros
for(let i = 2; i < cantidad; i++) {

    // CADA NUMERO ES LA SUMA DE LOS 2 ANTERIOS

    let siguiente = fibonacci[i - 1] + fibonacci[i-2]
    fibonacci.push(siguiente)

    // fibonacci[0] = fibonacci[1]
    // fibonacci[1] = siguiente
}

console.log(fibonacci)