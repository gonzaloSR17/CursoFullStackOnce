// Ejercicio CallBa

// Ejercicio de callback

// Crea una funcion  saludar que reciba un nombre y una funcion callback


function saludar(name, callback){
    const mensaje = `¡Holaaa ${name}!` 
    saludar2(mensaje)
}

function saludar2(nombre) {
    console.log(nombre)
}

saludar("Gonzalo", saludar2)

// saludar("Leon", mostrarSaludo)


// FUNCION ANONIMA

saludar("Ragarnina", function(mensaje) {
    console.log(mensaje);
})