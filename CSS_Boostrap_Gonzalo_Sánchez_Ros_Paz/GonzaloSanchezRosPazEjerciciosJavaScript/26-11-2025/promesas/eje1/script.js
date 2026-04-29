// Crea una promesa que se resuelva despues de dos segundo con el mensaja "Promesa Cumplida"
// Muestra el resutado por consola

let myPromise = new Promise((resolve, reject) => {


    setTimeout(() => {
        resolve("Promesa Comuplida")
    }), 2000

})

myPromise.then(
    (mensaje) => {
        console.log(mensaje)
    }
);
