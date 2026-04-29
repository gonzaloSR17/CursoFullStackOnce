// Creo un array de objeto vacios
const tareas = []

// Recogo las variables de mi formulario a traves de un value cuando pulsemos el boton
const nameTarea = document.getElementById("ntarea");
const dateTarea = document.getElementById("nmomento");
const ListTarea = document.getElementById("ntipo");


// Ahora recogere el id de mi contenedor en donde ira las listas agregadas..
const containerlist = document.getElementById("container-list");

// Ahora cuando le de al submin hago un addEventListener...
const btnSubmit = document.getElementById("btn-submit")
btnSubmit.addEventListener("click", function(event) {
    // Evitamos que la pagina se recarge cuando recoga la informacion
    event.preventDefault()
    tareas.push({Nombre: nameTarea.value, Fecha: dateTarea.value, Tipo: ListTarea.value})
    console.log(tareas);

    // Vaciamos..
    nameTarea.value = ''
    dateTarea.value = ''
    ListTarea.value = ''

    // Añadir la tarea a la lista

    containerlist.innerHTML = ''
    tareas.forEach(element => { 
        containerlist.innerHTML += `<ul class="border-bottom list-unstyled mt-3">
        <li class="display-6 fw-bold">${element.Nombre}</li>
        <li>${element.Fecha}</li>
        <li class="mb-3">${element.Tipo}</li>
    </ul>`
    });



}
)




// Recogemos los values y lo asignamos con un push a nuestro objeto

