// callbacks

// Es una funcion que le pasamos por parametros por otra funcion
// ===================== CALL BACKS

// Tenenmos una funcion

function hacerAlgo(callback) {
    //Pasan cositas

    console.log("... pasan cositas ...");
    callback();


}

function cuandotermine() {
    console.log("Ya termino")
}

hacerAlgo(cuandotermine);