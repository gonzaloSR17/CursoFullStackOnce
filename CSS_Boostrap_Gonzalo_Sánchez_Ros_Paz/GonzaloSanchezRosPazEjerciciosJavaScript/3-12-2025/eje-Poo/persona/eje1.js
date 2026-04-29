// Crea una clase persona(nombre,edad), crea un metodo que se llame saludar

class Persona{
    constructor(nombre,edad){
        this.nombre = nombre
        this.edad = edad
    }

    saludar(){
        return `Hola ${this.nombre} de ${this.edad} años` 
    }
}



const person1 = new Persona('Squacky', 5)

console.log(person1.saludar())