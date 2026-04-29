// Ejercicio 10

/**
 *  Crea un objeto usuario que sea usuario
 *  con varias propiedades
 *  usa destructuring para extraer algunas propiedades en variables
 *  y mostrarlas.
 * 
 * */ 

const usuario = {
    usuarioname: 'Gon',
    pass: 'a1b2c3'
}

// Destructuring
let {usuarioname, pass} = usuario;

console.log(usuarioname+ ' - '+pass);