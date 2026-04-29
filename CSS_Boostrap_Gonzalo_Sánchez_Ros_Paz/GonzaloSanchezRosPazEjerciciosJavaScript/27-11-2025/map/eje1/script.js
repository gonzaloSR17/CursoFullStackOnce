// MAP ==========================================
// Es una coleccion de pares ckave-valor donde las claves pueden ser de cualquier tipo
// (no solo strings como en los objetos)

// {
//     nombre: "Juan",
//     edad: 25
// }

// metodos principales

const miMap = new Map()

// miMap.set(clave, valor) // añadir o actualizar
// miMap.get(clave) // obtener
// miMap.has(clave) // comprobar
// miMap.delete(clave) // borrar
// miMap.clear() // borrarlo entero
// miMap.size

miMap.set('user1', {nombre: "Ana", edad: 25})
miMap.set('user2', {nombre: "Ana", edad: 25})

console.log(miMap)


