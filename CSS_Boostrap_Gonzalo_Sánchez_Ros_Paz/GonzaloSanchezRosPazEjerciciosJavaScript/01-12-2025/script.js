function ejemplo1() {
    console.log("Inicio...")

    let nombre = "Juana"
    let edad = 26

    if (nombre == "") {
        //debugger
    }

    // el codigo se detendrá aquí
    //debugger

    let mensaje = '${nombre} tiene ${edad} años'

    //debugger

    //alert("Ejemplo 1 completado. Revisa la consola.")
}

function ejemplo2() {
    let resultado = document.getElementById("resultado2")
    resultado.innerHTML = `<p>Sumando numeroa de 1 al 5</p>`

    let suma = 0

    for (let index = 0; index <= 5; index++) {

        debugger

        suma += index;

        console.log(`Iteracción ${index} suma actual = ${suma}`)  

    }

    resultado.innerHTML = `<p><strong>Suma total: ${suma}</strong></p>` 
}

function ejemplo3() {


    let numero1  = 10;
    let numero2  = 30;

    debugger
    let resultado = sumar(numero1, numero2)

    document.getElementById("resultado3".innerHTML = `<p>El resultado de ${numero1} + ${numero2} = ${resultado} </p>`) 

}

function sumar(a, b) {

    debugger

    return a + b
}


function ejemplo4() {
    let resultado = document.getElementById("resultado4")
    resultado.innerHTML = ""

    for (let index = 0; index < 9; index++) {
        if (index === 7) {
            console.log("Alerta pasa algo raro")
            debugger
        }

        resultado.innerHTML += `<p>Numero: ${index}</p>` 
    }
}


function ejemplo5() {
    
    const resultado = document.getElementById("resultado5")
    let estudiantes = [{nombre: "Ana", notas: 8}, {nombre: "Carlos", notas: 10}, {nombre: "Maria", notas: 4},]

    debugger

    let notaPromedio = 0

    // for of para recorrer el ob
    for (const estudiante of estudiantes) {
        notaPromedio += estudiante.notas
        console.log(notaPromedio)
        debugger
    }

    let result = notaPromedio/estudiantes.length

    // toFixed para coger los 2 digitos
    return resultado.innerHTML = `<p>${result.toFixed(2)}</p>`  
} 

function ejemplo6() {
    let numeros = [2,4,6,8,10]
    let resultado = 0

    // iniciar epuracion
    debugger

    for (let index = 0; index < numeros.length; index++) {
        debugger
        console.log(`Indice: ${index}, valor: ${numeros[index]}`)
        resultado += numeros[index]
    }

    document.getElementById("resultado6").innerHTML = `<p>Suma: ${resultado}</p> <p>¿Notaste el error?</p>` 

}