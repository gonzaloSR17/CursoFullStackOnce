// Sumar todos los números de un array
 // Dado un array de números, escribe una función que calcule la suma de todos sus elementos.

let numeros = [1,2,3,4,5]

function sumNumero(numeros) {
    let contador = 0

    for (const element of numeros) {
    contador += element
    }

    return contador
}
 
 console.log(sumNumero(numeros))