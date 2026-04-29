// CALLBACK
// EJERCICIO 2
// Crea una funcion calcular() que reciba dos numeros y una funcion callback
// El callback debe realizar una operacion con esos numeros y DEVOLVER

function operacion(n1,n2,calva) {
    return resultado = calva(n1,n2)
}

function sum(n1,n2) {
    return n1+ n2;
}

function res(n1,n2) {
    return n1-n2;
}

console.log(operacion(5,5,sum))

console.log(operacion(5,2,res))