// Javascript para mejorar la cesiibilidad

//1. Actualizacion dinasmica del contenido
// Maneja el envio del formulario de búsqueda

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault

    const busqueda = document.getElementById('busqueda').value

    const contResult = document.getElementById('resultados')

    // Simular un delay

    setTimeout(function() {
        // Actualizar contendio html
        contResult.innerHTML = ` 
         <h3>Reultados para "${busqueda}"</h3>
<p>Se encontraron 3 libros</p>
<ul>
    <li><strong>El Quijote</strong></li> 
    <li><strong>Geronimo Stilton</strong></li>
    <li><strong>Diario de Greg</strong></li>
</ul>
`

// ACCESIBILIDAD: el aria-live = "polite" en el div anunciara automáticamente
// estos resultados a los lectores de la pantalla
// sin interrumpir lo que el usuario este escuchando
    }, 500)
})

// 2 SINTEXIS DE VOZ
// Permite a cualquier usuario escuchar el contenido en voz alta.
document.getElementById('btn-leer-aviso').addEventListener('click', function() {
    const texto = document.getElementById('mensaje-actualizado')

    // Verificar si el ordenador soporta sintexis de voz
    if (`speechSynthesis` in window){
        // Crear objeto de voz
        const utterance = new SpeechSynthesisUtterance(texto)
        utterance.lang = 'es-ES'
        utterance.rate = 0.9 // 90%

        // reproducir el texto
        speechSynthesis.speak(utterance)

        this.textContent = 'reproduciendo...'

        this.disabled = true // prevenir clicks

        // Cuando termine de leer, restaurar boton
        utterance.onend = () => {
            this.textContent = 'Escuchar aviso'
            this.disabled = false

        }
    } else {
        alert('Tu navegador no soporta sintesis de voz')
    }
})

// 3. GESTION DEL FOCO PARA NAVEGACION POR TECLADO
document.querySelector('.skip-link').addEventListener('click', function(e) {
    e.preventDefault()

    const mainContent = document.getElementById('main-content')

    // ACCESIBILIDAD: TABINDEX=-1 permite enfocar programaticamente elementos
    // que no son enfocables
    mainContent.setAttribute('tabindex', '-1')

    // Mover el foco al contenido principal
    mainContent.focus()
})

// 4 Validacopn acesibilidad
// proporcionas feedback inmediaro y accesible sobre errores
document.getElementById('busqueda').addEventListener('blur', function(){
    // validar cuando el usuario sale del campo
    if (this.value.length > 0 && this.value.length < 3){
        // accessibilidad: arial-invalid indica que el campo tiene error

        // Los lectores de pantalla anuncia invalido
        this.setAttribute('aria-invalid', true)

        // crear mensje de error si no existe
        if(document.getElementById('error-busqueda ')){
            const error = document.createElement('span')
            error.id = "error-busqueda"
            error.style.color = 'red'
            error.textContent = '--> Debe tener al menos 3 caracteres'
            
            // ACCESIBILIDAD: role = "alert" hace que el mensaje 
            // sea a nunciado inmediatamente
            error.setAttribute('role', 'alert')

            this.parentNode.appendChild(error)
        } else {
            // Limpiar estado de error si la validacion pasa
            this.setAttribute('area-invalid', 'false')
            const error = document.getElementById('error-busqueda')

            if (error) error.remove()

        }
    }
})