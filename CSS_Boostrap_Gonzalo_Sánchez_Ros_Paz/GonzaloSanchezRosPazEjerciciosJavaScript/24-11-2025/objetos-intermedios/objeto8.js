// Ejercicio 13

// Crea objeto "temperatura" que almacena el valor en Celsisus
// y tenga geters y setters para obtener y establecer la temperatura en Fahrenheit

const temperatura = {
    _celsius: 25,

    // getter
    get fahnreitt(){
        return this. _celsius * 9/5 + 32
    },


    // setter
    set fahnreitt(valor) {
        this._celsius = (valor - 32) * 5*9
    },

    get celsius(){
        return this._celsius;
    },

    set celsius(valor) {
        this._celsius = valor;
    }

}

console.log("Celsisus: ", temperatura.celsius);