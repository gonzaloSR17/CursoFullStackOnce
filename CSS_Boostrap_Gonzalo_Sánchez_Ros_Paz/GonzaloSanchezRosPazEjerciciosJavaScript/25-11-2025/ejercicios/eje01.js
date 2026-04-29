/**
 *  Ejercicios de propiedad solo lecturas
 */

class cuentaBancaria {
    constructor(titular, saldoInicial) {
        this.titular = titular
        this._saldo = saldoInicial
        this._fechaCreacion = new Date()
    }

    // GETTER
    get saldo() {
        return this._saldo;
    }

    // GETTER
    get fechaCreacion() {
        return this._fechaCreacion.toLocaleDateString();
    }

    // SETTER
    depositar(cantidad) {
        if(cantidad <= 0) {
            console.log("la cantidad debe ser positiva bro");
            return false;
        } 

        if (this._saldo > cantidad) {
            console.log("Quieres pedir un credito de 10.000?");
        }
        
        this._saldo += cantidad
        console.log("OK, ingreso realizado correctamente. Importe: " +cantidad+ " Saldo: " +this.saldo )
    }

    // SETTER
    retirar(cantidad) {
        if (cantidad <= 0) {
            console.log("Bro, no tienes na de dinero")
            return false;
        }

        if (cantidad > this._saldo) {
            console.log("Te has pasado bro, no eres Tio McPato, acepta tu pobreza")
            return false;
        }

        this._saldo -= cantidad;
        console.log("Retirada realizada con exito");
        return true;

    }

    consultarCuenta(){
        console.log(`Nombre del titular:  ${this.titular}`);
        console.log(`Saldo Actual:  ${this._saldo}`);
        console.log(`Fecha Creacion:  ${this._fechaCreacion}`)
    
    }
}

const banc = new cuentaBancaria("Gonzalo", 1000);

banc.consultarCuenta();

console.log("Saldo: ", banc.saldo)

console.log("Fecha: ", banc.fechaCreacion);

banc.saldo = 100000

console.log(banc.saldo)

banc.depositar(200);

banc.depositar(-200);

banc.retirar(200);