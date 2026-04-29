// Una clase es un molde sobre objeto y en funcion del molde que tengamos contruiremos dichos objetos

// Las clases tiene constructores y ocupa menos espacios
class  Car {
    constructor(n, y) {
        this.name = n
        this.year = y
    }

    // Metodos
    age() {
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

const myCar1 = new Car("Ford",2014);
const myCar2 = new Car("Fiat",2008);