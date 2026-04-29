
// Repaso de Arrays en JavaScripts

const num = [1,2,3,4,5,6,7,8,9];

// Metodos que modifican el array original
console.log(num)
num.push(10)
console.log(num)

// Elimina el ultimo elemento
num.pop()
console.log(num)

// Agrega elemento al inicio
num.unshift(0)
console.log(num)

// Elimina, ageha o reemplaza los elementos en una posicion especifica

num.splice(0, 1)
console.log(num)

// Ordenar array

const numDesordenado = [98, 32, 12, 9, 67, 3,27]

console.log(numDesordenado)
console.log(numDesordenado.sort((a,b) => a - b))

// Encontrar en que posicion ultima se encuentra un posicion

console.log(numDesordenado.lastIndexOf(32) + 1)

// Verificar si hay un elemeto en un array...

if(numDesordenado.includes(3)) {
    console.log("Se encontro dicho elemento");
} else {
    console.log("No se encontro")
}