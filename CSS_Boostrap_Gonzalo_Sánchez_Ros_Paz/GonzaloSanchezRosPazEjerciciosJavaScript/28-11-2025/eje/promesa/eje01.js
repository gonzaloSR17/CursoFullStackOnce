// Crea una promesa que se resuelva con el numero 5. Luego
// encadena dos then(): el rpimero debe sumar 3 al numero
// el segundo debe multiplicarlo por 2
const promesa = new Promise(function(resolve, value) {
    resolve(5)
})


promesa.then((mensaje) => {
    console.log(mensaje)
    return mensaje + 3
})
.then((mensaje) => {
    console.log(mensaje)
    return mensaje * 2
})
.then((mensaje) => {
    console.log(mensaje)
});


