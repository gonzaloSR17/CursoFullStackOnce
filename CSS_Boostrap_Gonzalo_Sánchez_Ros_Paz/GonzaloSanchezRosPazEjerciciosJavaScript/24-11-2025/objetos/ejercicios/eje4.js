// crear un objeto producto y verifica si tiene las propiedades de precios y stock, muestra las prioirdades haber si existe

const producto = {
    nombre: 'peluche',
    precio: 900,
    marca: 'flamingo'
}

if ("precio" in producto) {
    console.log("EXISTE PRECIO")
} else {
    console.log("NO EXISTE PRECIO")
}

if ("stock" in producto) {
    console.log("EXISTE stock")
} else {
    console.log("NO EXISTE stock")
}