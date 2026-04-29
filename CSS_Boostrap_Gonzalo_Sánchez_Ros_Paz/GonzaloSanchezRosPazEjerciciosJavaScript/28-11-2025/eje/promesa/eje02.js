// crea una funcion que simule el lanzamiento de un dado (1-6)
// la funcion debe devolver una promesa que se resuelva despues de 1 segundo con el numero obtenido

function tiraDado(){
    return promesa = new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve(Math.floor(Math.random() * 6 + 1));
        }, 1000) 
    })
}

tiraDado().then((mensaje) => {
    console.log(mensaje);
})