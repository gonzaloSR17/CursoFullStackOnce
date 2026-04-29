// EJERCICIO 4: SUMA ASINCRONA
// Crea una funcion que reciba dos numeros y devuelva una promesa que se
// resuelva con la suma de ambos numeros despues 1.5 segundos

function suma(n1,n2){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(n1+n2)
        }, 1500)
    })
}

suma(5,5).then(result => console.log(result));