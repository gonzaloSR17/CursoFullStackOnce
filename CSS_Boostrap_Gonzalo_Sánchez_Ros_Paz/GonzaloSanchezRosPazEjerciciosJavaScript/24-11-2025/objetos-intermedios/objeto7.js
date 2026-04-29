// Ejercicio 12

/// Crea un objeto tienda con productos y cantitades
// Usa los metodos object.keys(), Object.values y Object.entrys
// para mostrar diferente info

const tienda = {
    producto: "Manta de Squacky",
    precio: 10.99,
    tematica: 'hogar',
    cantidad: 12 
}


// Devuelve las propiedades (lo podemos guardar en una variables)
console.log(Object.keys(tienda));

// Devuelve los valores (lo podemos guardar en una variables)
console.log(Object.values(tienda));

// Devuelve todo (Opcion 1 & Opcion 2)
console.log(Object.entries(tienda))


Object.entries(tienda).forEach(
    function([producto, cantidad]) {
        console.log(`- ${producto}: ${cantidad} unidades`) 
    }) 

