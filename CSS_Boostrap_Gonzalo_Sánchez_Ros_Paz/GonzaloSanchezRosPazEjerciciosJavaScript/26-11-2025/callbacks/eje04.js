// Procesar lista con calva
// Crear func procesarLista() que reciba array de números y un callback.
// La funcion debe recorrer el array y aplicar el callback a cada elemento
// mostrando el resultado

function procesarLista(lista, calva){
    for (i = 0; i < lista.length; i++) {
        calva(lista[i])
    }
}

function imprimirCel(varr) {
    console.log(varr)
}


procesarLista([1,2,3,4], imprimirCel)