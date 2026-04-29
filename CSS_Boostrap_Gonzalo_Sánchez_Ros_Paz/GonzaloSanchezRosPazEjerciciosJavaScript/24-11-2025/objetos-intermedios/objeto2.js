// ejercicio 8

// Crea un objetoo con propiedades anidadas. Haz una copia superficial y otra profunda
// modifica la copia y muestra como afecta a la original

const persona = {
    nombre: 'Ana',
    Apellido: 'Suarez',
    direccion: {
        calle: 'Flamingo Landia',
        portal: 4
    },
    contactos: {
        telefono: 123456789,
        gmail: 'ana@ana.es'
    },
    edad: 23 
}

// Copia Superficial con ayuda de la funcion assign de object, aclaramos que estipo objeto..
const copiaSuperficial = Object.assign({}, persona)
console.log("Superficial: ", copiaSuperficial)

// Copia profunda json parse y convertir la cadena de texto
const copiaProfunda = JSON.parse(JSON.stringify(persona))
console.log(persona)

console.log("AHORA MODIFICAMOS EL TELEFONO DESDE LA COPIA SUPERFICIAL")

copiaSuperficial.contactos.telefono = 987654321
console.log(copiaSuperficial.contactos.telefono);

console.log(persona);

console.log("HABER QUE PASA SI LO HAGO CON COPIA PROFUNDA");
copiaProfunda.contactos.telefono = 1111111111

console.log("Profunda: ", copiaProfunda.contactos.telefono);
console.log("Original: ", persona.contactos.telefono)
