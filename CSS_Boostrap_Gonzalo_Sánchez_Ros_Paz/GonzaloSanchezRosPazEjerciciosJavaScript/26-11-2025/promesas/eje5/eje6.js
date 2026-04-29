// Crea una funcion cargar usuario() que simule la carga de datos de un usuario

// Devuelve una promersa que se resuelve despues de dos segundos  con un objeto que contenga nombre: Juan edad:25

function usuario(nombre, edad) {
    return new Promise((resolve,reject) => {

        setTimeout(() => {
            const user = { nombreUser: nombre, edadUser: edad }
            resolve(user)
        }, 1500)
        
    })
}

usuario("Juan",23).then((mensaje) => console.log(`Usuario: ${mensaje.nombreUser} Edad: ${mensaje.edadUser} `))