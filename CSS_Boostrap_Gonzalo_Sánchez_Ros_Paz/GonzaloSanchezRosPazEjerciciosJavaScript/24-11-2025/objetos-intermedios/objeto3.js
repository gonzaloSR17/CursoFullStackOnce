// Ejercicio 9

// Constructor de objetos en construccion
// Crea una funcion constructora llamada rectangulo
// Tiene metodo para calcular area y perimetro
// Crea 2 instacnia del objeto


function rectangulo(a, b) {
    this.base = b, 
    this.altura = a,
    this.calcularArea = function() {
         return this.base * this.altura;
    }
    this.calularPerimeto = function() {
        return 2 * (this.base * this.altura)
    }
}

// Llamamos a la funcion como constructor de objeto con ayuda de new

const rec1 = new rectangulo(2, 4);
const rec2 = new rectangulo(8, 16)

console.log (rec1.calcularArea());

console.log (rec1.calularPerimeto());

console.log (rec2.calcularArea());

console.log (rec2.calularPerimeto());