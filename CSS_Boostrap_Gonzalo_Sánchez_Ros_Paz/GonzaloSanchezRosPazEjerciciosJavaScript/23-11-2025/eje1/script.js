// // Ejercici

// for (i = 1; i <= 10; i++) {
//     console.log('Este numero es ' +i);
// }

// // ejercicio 2

// for (i = 1; i <= 20; i++) {

//     if(i%2 == 0) {
//          console.log('Este numero es ' +i);

//     }
// }

// // ejercicio 3
// let contador = 10
// while (contador >= 0) {
//     console.log(contador)
//     contador--
// }

// // eje 5
// let contador5 = 0;
// for (i = 0; i <= 100; i++) {
//     contador5 = contador5 + i;
// }

// console.log('El numero de los 100 es... ' +contador5);
// // eje 12

const nombres = ['Gon','Squacky','Apollo','Goku','Gena']

let contador12 = 0;

nombres.forEach(element => {
    if(element.charAt(0) == 'G') {
        contador12++
    }
});

console.log('Hay un total de nombres de ' +contador12);


// palindromo

let palabra = 'osso';

let contador = palabra.lenght();

let pal = 0;

for (i = 0; i <= palabra.length; i++) {
    if (palabra.charAt(i) == palabra.charAt(contador)) {
        pal = 0
        contador--
    } else {
        pal = 1
        break;
    }

}

if (pal = 0) {
    console.log('Es palindormo');
} else {
    console.log('NO');
}