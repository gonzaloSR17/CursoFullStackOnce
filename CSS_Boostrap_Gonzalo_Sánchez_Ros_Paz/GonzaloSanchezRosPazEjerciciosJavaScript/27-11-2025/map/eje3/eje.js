// // eliminar duplicados y ordenar con Set...

// // Tenemos arrays con elementos duplicados. Usa set para eliminar los duplicados,luego convierte
// // el resultado a array, usa map() para elevar al cuadrado cada numero y finalmente usa reduce para sumar todos los valores

// let numero = [2, 5, 2, 7, 5, 9, 2, 3, 8]

// const miSet = new Set();

// for (let index = 0; index < numero.length; index++) {
//     miSet.add(numero[index]);
// }

// // Convertir resultado

// numero = []

// for (const valor of miSet) {
//         numero.push(valor)
// }

// console.log(numero) 

// const sol = numero.reduce(function(map, numero){
//     map.set(numero, Math.sqrt(numero))

//     return map

// }, new Map());


// console.log(sol);

// numbers.reduce(myFunc);

// function myFunc(){

// }

// console.log(sumTotal)

// Solucion

const numero = [2, 5, 2, 7, 5, 9, 2, 3, 8]

//paso 1: eliminar duplicados
const numerosUnicos = new Set(numero)

//paso 2: convertir a array y elevar al cuadrado con map

const numeroCuadrado = Array
.from(numerosUnicos)
.map(function(num){
    return num * num
})

// paso 3: sumar todos los valores

const suma = numeroCuadrado.reduce(function(acumulador, num){
    return acumulador+ num
}, 0)

