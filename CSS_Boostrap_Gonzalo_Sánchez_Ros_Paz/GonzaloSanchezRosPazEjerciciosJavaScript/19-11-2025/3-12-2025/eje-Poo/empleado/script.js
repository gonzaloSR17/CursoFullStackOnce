// Ejercicio 3
// Crear un sistema de recursos humanos con diferentes tipos de empleados.
// Cada tipo calcula su salario de manera diferente
// Implementa herencia, encapsulacion y polimorfismo


class Empleado{
    #salarioBase

    constructor(nombre,id,salarioBase){
        this.nombre = nombre
        this.id = id
        this.#salarioBase = salarioBase
        this.fechaContratacion = new Date()
    }

    // getter y setter

    get salarioBase(){
        return this.#salarioBase
    }

    set salarioBase(nuevoSalario) {

        if (nuevoSalario < 0) {
            throw new Error("--> El salario no puede ser negativo")
        }
        
        this.#salarioBase = nuevoSalario
    }

    obtenerAntiguedad() {
        const annio = (newDate() - this.fechaContratacion) / (1000 * 60 * 60 * 24 * 365)
        return Math.floor(annio)
    }

    mostrarInfo(){
        return `${this.nombre} ${this.id} - Salario: ${this.salarioBase}`
    }


}

class EmpleadoTiempoCompleto extends Empleado {
    constructor() {
        super(this.nombre,this.id,this.salarioBase)
        this.bonoAnual = bonoAnual
        this.vacionesTomadas = 0
        this.diasDeVacaciones = 20
    }


    // Sobreescribir el calculo de salario

    calcularSalario() {
        const salarioMensual = this.salarioBase + (this.bonoAnual / 12)
        // Bono 2%
        const bonoAntiguedad = salarioMensual * (this.obtenerAntiguedad() * 0.02)
    }


}