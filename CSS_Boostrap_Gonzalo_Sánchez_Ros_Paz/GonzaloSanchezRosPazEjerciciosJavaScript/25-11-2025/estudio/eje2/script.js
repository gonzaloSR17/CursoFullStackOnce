const colores = ["bg-danger","bg-warning","bg-success","bg-primary","bg-dark"]
const btnWeb = document.getElementById("botonEje");
const containerColor = document.getElementById("container-color");
let contador = 0

btnWeb.addEventListener('click', () => {

    // eleiminar un claslist en especifico
    containerColor.classList.remove(colores[contador]);

    // Funcion aux para resetear nuestro contador si esta fuera de indice
    // auxCont();

    // o por formula
    contador = (contador + 1) % colores.length

    // Añadimos el nuevo color
    containerColor.classList.add(colores[contador]);

})

// function auxCont(){
//     if (contador == colores.length - 1) {
//         contador = 0
//     } else {
//         return contador++
//     }
// }