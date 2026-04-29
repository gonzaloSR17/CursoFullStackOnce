function iniciarProceso() {
    //Recogemos el id de la tabla
    const table = document.getElementById('numberList')
    
    //Visualizamos la tabla
    table.classList.remove('d-none');

    //Inicializamos la funcion numeroRamdon
    numeroRamdon();

}

function numeroRamdon(){
    
    // Declaramos la variable id h1
    const numberCount = document.getElementById("idnumber");

    // Generamos un numero ramdon, Math floor me lo devolvera en un intenger
    const number = Math.floor(Math.random() * 100) + 1;;

    numberCount.textContent = number;
    //console.log(number);
}

