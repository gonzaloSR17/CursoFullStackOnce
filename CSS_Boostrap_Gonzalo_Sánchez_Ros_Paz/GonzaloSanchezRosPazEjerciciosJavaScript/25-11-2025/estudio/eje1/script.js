// Capturar el boton
const btnWeb = document.getElementById('botonEje')
const textWeb = document.getElementById('textoEje')

// funcion cambiada
btnWeb.addEventListener("click", () => {
    textWeb.textContent = "Texto Cambiado"
})