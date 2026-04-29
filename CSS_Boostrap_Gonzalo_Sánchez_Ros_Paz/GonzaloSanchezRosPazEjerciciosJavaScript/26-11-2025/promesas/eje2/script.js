// Ejercicio 2

// Crea una promesa que se rechace despues de 1 segundo
// con el mensaje Error. Maneja el error usando catch

let myPromise = new Promise((resolve, reject) => {
    
setTimeout (() => {
    reject("Errooor")
}, 1000)

    
})

myPromise.then((result) => {
    console.log(result);
})
myPromise.catch((error) => {
    console.log(error)
})