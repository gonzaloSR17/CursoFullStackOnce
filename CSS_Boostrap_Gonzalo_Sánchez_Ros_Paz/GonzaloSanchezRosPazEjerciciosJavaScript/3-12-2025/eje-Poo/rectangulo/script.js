// Crear una clase de rectangulo la cual tiene propiedades ancho y alto, tiene 2 metodos, (calcularArea), (Calcular perimetro)


class rectangulo{

    constructor(ancho,alto){
        this.ancho = ancho,
        this.alto = alto
    }

    calcularArea() {
        return area = this.ancho * this.alto
    }

    calcularAlto() {
        return (this.ancho + this.alto) * 2
    }
}


const rectangulo1 = new rectangulo(5,20)

console.log(rectangulo1.calcularAlto()) 