// Crea una funcion que reciba una edad y devuelva una promesa

function promesaEdad(edad){
    return new Promise((resolve, reject) => {
        if(edad => 18){
            resolve("Eres mayor de dad")
        } else {
            reject("Eres menor de edad")
        }
    })
}



promesaEdad(1)
  .then(result => console.log(result))
  .catch(error => console.log(error));

