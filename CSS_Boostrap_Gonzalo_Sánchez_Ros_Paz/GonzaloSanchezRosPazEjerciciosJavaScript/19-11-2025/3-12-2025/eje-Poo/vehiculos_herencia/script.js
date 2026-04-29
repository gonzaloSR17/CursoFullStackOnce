// // Ejercicio 2: SISTEMA DE VEHICULOS CON HERENCIA
// // Crea una jerarquia de clases para diferentes tipos de vehiculos
// // Implementa una clase de bas "Vehiculo" y clases derivadas "Coche", "Moto" y "Camion"
// // Cada una debe tener caracteristicas especificar y sobreescribir metodos

 class Vehiculo {
     constructor(marca,modelo,año){
         this.marca = marca
         this.modelo = modelo
         this.año = año
         this.velocidad = 0
     }

     acelerar(cantidad){
        this.velocidad += cantidad
        return `Acelerando a ${this.velocidad}` 
     }

        frenar(cantidad){
            this.velocidad = Math.max(0, this.velocidad - cantidad)
        } 

        obtenerInfo(){
            return `Modelo: ${this.modelo} Año: ${this.anio}`
        }
 }


 class Coche  extends Vehiculo{
     constructor(marca,modelo,año, numeroPuertas){
        // Las propiedades del sector de vehiculo 
        super(marca,modelo,año)
        this.numeroPuertas = 3
        this.maleteroAbierto = false
     }

     acelerar(cantidad){
        const velocidadMaxima = 200
        this.velocidad = Math.min(this.velocidad + cantidad, velocidadMaxima)
        return `Coche acelerando a ${this.velocidad} km/h (max: ${this.velocidadMaxima})`
     }

     abrirMaletero(){
        this.maleteroAbierto = true
        return "Maletero Abierto"
     }

     obtenerInfo(){
        return `${super.obtenerInfo} - ${this.numeroPuertas}`
     }

 }

 const coche = new Coche("Renault", "Clio", 1996)

 console.log(coche.acelerar(25))
