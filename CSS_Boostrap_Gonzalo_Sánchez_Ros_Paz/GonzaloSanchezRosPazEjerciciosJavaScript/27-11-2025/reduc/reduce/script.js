/**
 *  Ejercicio 3: Usar reduce() para contar cuantas veces aparece cada palabra
 */

const palabra = ['hola','mundo','hola','javascript','mundo','hola']

// para reducir, contar cuanta veces aparece cada palabra

const contador = palabra.reduce(function(acumulador, palabra){
    // Si la palabra existe incrementamos su contador

    if (acumulador[palabra]){
        acumulador[palabra]++
    } else {
        acumulador[palabra] = 1
    }

    return acumulador
}, {}) // inicializando con un objeto vacio

console.log(contador)