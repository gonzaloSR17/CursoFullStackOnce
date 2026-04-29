function mayor(a, b){
    if (a > b) {
        return a
    } else if (b > a) {
        return b
    } else {
        return "empate";
    }

}

console.log(mayor(21, 12));

// ejercicio 2

function contar(numero){
    return "Hay un total de " +numero.length
}
console.log(contar([4, 3, 6, 7, 6, 9]))

// ejercicio 3

function esPar(c) {
    if (c % 2 == 0) {
        return "par"
    } else {
        return "impar"
    }
}

console.log(esPar(4))

// Ejercicio 4 - Encontrar el número mayor dentro de un array

function mayorArray(numero){
    // Desempaquetamos el array con los 3 puntos...
    return Math.max(...numero) 
}

console.log("El numero mas mayor es ", mayorArray([99,87,32,12,76]));

// Ejercicio 5 - Contar cuántas veces aparece un número en un array

function contarOcurrenciar(arr, buscado){
    let cont = 0;
    for(i = 0; i < arr.length; i++) {
        if(arr[i] == buscado){
            cont++;
        }
    }

    return cont;
}

console.log("Este numero aparece un total de ", contarOcurrenciar([4,3,4,2,1,4], 4));


// Ejercicio 6 Devolver un array solo con numeros pares

function parOnly(numero) {
    /* Opcion 1
    for(i = numero.length - 1; i >= 0; i--) {
        if(numero[i] % 2 === 1) {
            numero.splice(i, 1);
        }
    }

    return numero;
}
    */
   /* Opcion 2:
   */
  return numero.filter(n => n % 2 === 0);
 }   

console.log(parOnly([4,20,3,15,18]))