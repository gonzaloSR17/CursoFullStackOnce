/*
*   EJERCICIO 1: COntar frecuencia con Map()
*   Dado un array de palabras: usa reduce() para crear un Map() que cuente la frecuencia de cada palabra.
*   Luego usa el metodo map() de los arrays para obtener las palabras que aparecen mas de una vez
*/

const palabras = ["hola","mundo","javascript","mundo","hola","css","html","javascript"]

const contador = palabras.reduce(function(map, palabra){
    // Si la palabra existe incrementamos su contador
    if (map.has(palabra)){ // verificamos si existe la palabra
        map.set(palabra, map.get(palabra) + 1) // si existe sumamosa 1
    } else {
        // Si no existe
        map.set(palabra, 1)
    }

    return map
}, new Map()) // inicializando desde Map

console.log(contador)

// Paso 2: Filtrar la palabra que aparecen ams de una vez
const palabraRepetidas = Array.from(contador).filter(function([palabra, cantidad]){
    return cantidad > 1;
})
   
.map(function([palabra,cantidad]) {
        return palabra
    })

console.log(palabraRepetidas)
