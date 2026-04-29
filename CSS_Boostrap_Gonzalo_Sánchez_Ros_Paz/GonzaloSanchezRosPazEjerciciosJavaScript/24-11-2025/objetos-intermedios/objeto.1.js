// Ejercicio 7

// Crea un array con 5 objetos de productos(nombre y precio) Filtra y muetsra solo los productos de mas de 50 euros

const producto = [{
    nombre: 'peluche Flamingo',
    precio: 51,
},

{
nombre: 'peluche osito',
    precio: 32,

},

{
nombre: 'peluche hormiga',
    precio: 12,

},

{
    nombre: 'peluche tren',
    precio: 32,

},

{
nombre: 'peluche pato',
    precio: 55,

}
]


// Filtrar

const result = producto.filter((p) => p.precio > 50)


/*
* console.log(productos.filtrer(function(producto) {
    return producto.precio > 50
}))
*
*/
console.log(result)

