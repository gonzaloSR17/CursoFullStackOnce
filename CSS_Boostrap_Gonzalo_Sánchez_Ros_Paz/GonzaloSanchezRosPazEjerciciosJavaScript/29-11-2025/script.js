// Capitalizar palabra
//Escribe una función capitalizar(palabra) que convierta la primera letra en mayúscula.

const nombre = "squacky"
function capitalizar(palabra) {
    
        let aux = "";
        for (let index = 1; index < palabra.length; index++) {
            aux += palabra.charAt(index)
        }

        return palabra.charAt(0).toUpperCase().concat(aux)
}

console.log(capitalizar(nombre));

// 2.1 opcion optimizada
const nombre2 = "squacky";

function capitalizar2(palabra) {
    return palabra.charAt(0).toUpperCase() + palabra.slice(1);
}

console.log(capitalizar2(nombre)); // "Squacky"

// 2.2 version mas moderna (ES6)

const capitalizar3 = ([primera, ...resto]) => primera.toUpperCase() + resto.join('')

console.log(capitalizar("squacky"))