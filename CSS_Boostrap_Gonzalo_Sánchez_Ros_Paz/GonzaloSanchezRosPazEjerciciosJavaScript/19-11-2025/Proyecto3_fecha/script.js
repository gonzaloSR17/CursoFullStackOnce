/*Funcion para actualizar la fecha y la hora */

function actualizarFechaHora(){
    /*Creamos el objeto date*/
    const ahora = new Date(); 

    // Obtener el elemento
    const elementoFechaHora = document.getElementById("fechahora");
    
    // .innerHTML = "Hoy estamos a" +ahora.getDay+ " Del mes " +ahora.getMonth+ " Del año " +ahora.getFullYear

    // Mostrar el area completo la funcion lo convertira en string ademas no tenemos que 

    elementoFechaHora.textContent = ahora


}

// Llama a la funcion
actualizarFechaHora();

// actualizar cada segundo en milisegundos
setInterval(actualizarFechaHora, 1000);