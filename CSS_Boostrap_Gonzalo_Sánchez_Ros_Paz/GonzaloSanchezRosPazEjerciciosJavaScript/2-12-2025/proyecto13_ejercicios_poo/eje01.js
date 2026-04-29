// Ejercicio 1: Sistema de gestion de biblioteca
// Crea un sistema de bibliotecas con clases para libro, usuario y biblioteca

// Los usuarios puede tomar prestado y devolver libros

// la biblioteca debe controlar el inventario y los prestamos activos


class usuario{
    constructor(nombre,correo,libros){
        this.name = nombre
        this.email = correo
        this.libroPrestado = []
    }


    tomarPrestado(libro) {
        if(!libro.prestado){
            libro.prestar(this.nombre)
            this.libroPrestado.push(libro)
        } else {
            console.log ('Lo siento el libro fue prestado')
            return
         }
    }

    devolverLibro(libro) {
        const index = this.libroPrestado.indexOf(libro)

        if(index === -1){
            console.log(`No tienes el libro ${libro.titulo}`) 
            return
        }

        libro.devolver()
        this.libroPrestado.splice(index, 1)
        console.log(`${this.nombre} ha devuelto ${libro.titulo}`)
    }

}

class libro{
    constructor(identificador,nameLibro,numpages,prestado){
        this.id = identificador
        this.name = nameLibro
        this.pages = numpages
        this.prestado = prestado
    }

    //metodo para prestar
    prestar(usuario){
        if(this.prestado){
            return `El libro "${this.titulo}" ya esta prestado ` 
        }

        this.prestado = true
        this.usuarioPrestamo = usuario
        return `Libro prestado existosamente a ${usuario}` 
    }

    // metodo para devolver
    devolver(){
        if(!this.prestado){
            return `El libro "${this.titulo}" no esta prestado ` 
        }

        this.prestado = false
        const nameUser = this.usuarioPrestamo
        this.usuarioPrestamo = null
        return `Libro devolvido existosamente por ${this.usuarioPrestamo}` 

        
    }
}

class Biblioteca {
    constructor(nombre,libros) {
        this.nombre
        this.libros = []
        this.usuarios = []
    }

    agregarLibro(libro){
        this.libros.push(libro)
        console.log(`El libro agregado al catalogo ${libro.titulo}`) 
    }

    agregarusuario(usuario) {
        this.usuarios.push(usuario)
        console.log(`El usuario agregado  ${usuario.name}`) 
    }

    librosDisponibles(){
        return this.libros.filter(libro => !libro.prestado)
    }

    reportarPrestamo(){
        //return this.libros.filter(libro => libro.prestado)

this.libros
  .filter(libro => libro.prestado)
  .forEach(libro => {
    console.log(`${libro.usuarioPrestamo}`);
  });    }
}


const biblioteca = new Biblioteca("Biblioteca de Sevilla")
const libro1 = new libro(1,"Geronimo Stilton", 200)
const libro2 = new libro(4,"Geronimo Stilton 4", 400)
const usuario1 = new usuario('Squacky','Squacky@marioneta.es')

usuario1.tomarPrestado(libro1)
biblioteca.reportarPrestamo()
// const user1 = new usuario('Squacky', 'Squacky@marioneta.es', null)

// const libro1 = new libro(1,'Geronimo Stilton',200,false)

// user1.añadirLibro('Geronimo Stilton', libro1)

// console.log(libro1)
