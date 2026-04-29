
// ===========================================
// 1.- TIPOS PRIMITIVOS
// =============================================

// 1.1 Variables String y salida de consola

// Representa texto. Se puede usar comillas simples, dobles o backticks.

let nombre = "Gon";
let apellido = 'Flamingo';
let saludo = `Hola, ${nombre}`; // Template literals

console.log(saludo);

// 1.2 Number numero

// Representa números enteros y decimales. JavaScript no distingue entre ellos.

let edad = 25;
let precio = 19.99;
let negativo = -10;

// 1.3 Boolean

// Representa valores de verdad: true o false.

let esMayorDeEdad = true;
let tieneDescuento = false;

// 1.4 Undefined

// Variable declarada pero sin valor asignado.

let sinValor;
console.log(sinValor); // undefined

// 1.5 Null

// Representa la ausencia intencional de un valor.

let usuario = null; // Intencionalmente vacío

// BigInt 1.6

// Para números enteros muy grandes que superan el límite de Number.

let numeroGrande = 9007199254740991n;

//  1.7 Symbol (simbolos )

// Crea identificadores únicos e inmutables. Uso avanzado

let id = Symbol('identificador');

// =======================================================
// 2. TIPOS DE REFERENCIA (OBJETOS)
// =======================================================

// 2.1 Objetos

// Colección de pares clave-valor.

let persona = {
nombre: "Carlos",
edad: 30,
ciudad: "Madrid"
};

// 2.2 Array

// Lista ordenada de elementos. Puede contener cualquier tipo de dato.

let frutas = ["manzana", "pera", "uva"];
let numeros = [1, 2, 3, 4, 5];
let mixto = [1, "texto", true, null];

// 2.3 Function

// Bloque de código reutilizable.

function saludar(nombre) {
return `Hola, ${nombre}`;
}

// 2.4 Date (fecha)

// Representa fechas y horas.

let hoy = new Date();
let fecha = new Date("2025-10-31");

// =================================================
// 3 VERICAR TIPOS DE DATOS
// =================================================


// 3.1 Operador typeof

typeof "hola"
typeof 42
typeof true
// "string"
// "number"
// "boolean"
typeof undefined     // "undefined"
typeof null
// "object" (peculiaridad histórica)
typeof {}
typeof []
// "object"
// "object"
typeof function(){}  // "function"

// 3.2 Verificar Arrays

Array.isArray([1, 2, 3])  // true
Array.isArray("texto")    // false

// 4. CONVERSION DE TIPOS

// 4.1 A String

String(123) //"123"
(123).toString()   // "123" 
123 + ""           // "123" 

// 4.2 a number

Number("123")      // 123 
parseInt("123")    // 123 
parseFloat("12.5") // 12.5 
+"123"             // 123

//4.3 a boolean

Boolean(1)         //true
Boolean(0)         //false
Boolean("")        //fasle
Boolean("texto")   // true 
!!"valor"          // true


// ===================================================
// 5.- VALORES FALSY y TRUTHY
// ===================================================

// Valores Falsy (se evalúan como false): 

// ● false 
// ● 0 
// ● "" (string vacío) 
// ● null 
// ● undefined 
// ● NaN 

// Valores Truthy: Todo lo demás se evalúa como true. 

// ====================================================
// 6.- SET Y MAP EN JAVASCRIPT
// ====================================================

// 6.1 Set (Conjunto)

// Un Set es una colección de valores únicos. No permite duplicados y mantiene el orden de 
// inserción.

// Crear un Set 

// Set vacío 
let miSet = new Set(); 
// Set con valores iniciales 
let numeross = new Set([1, 2, 3, 4, 5]); 
// Set elimina duplicados automáticamente 
let conDuplicados = new Set([1, 2, 2, 3, 3, 4]); 
console.log(conDuplicados); // Set {1, 2, 3, 4} 

let frutass = new Set(); 

//6.1.1 Metodos Principales de Set

// Agregar elemento ->  frutas.add("manzana"); (No se puede agregar duplicados)
// Verificar si existe -> console.log(frutass.has("manzana") = true || console.log(frutass.has("manzana") = false)
// Eliminar elementos -> frutas.delete("pera"); 
// Tamaño del Set -> console.log(frutas.size); // 1
// Eliminar todos los elementos -> frutass.clear();

//6.1.2 Iterar un Set

let colores = new Set(["rojo", "azul", "verde"]); 

// forEach 
colores.forEach(color => { 
console.log(color); 
}); 

// for...of 
for (let color of colores) { 
console.log(color); 
} 

// Convertir a Array 
let arrayColores = [...colores]; 
// o también: Array.from(colores) 

// 6.1.3 Caso de uso de Set

// 1 Eliminar un duplicado

let numerosss = [1, 2, 2, 3, 3, 4, 5, 5]; 
let unicos = [...new Set(numeros)]; 
console.log(unicos); // [1, 2, 3, 4, 5] 

// 2 Verificar valores unicos

let emails = new Set(); 
emails.add("user1@email.com"); 
emails.add("user2@email.com"); 
emails.add("user1@email.com"); // No se agrega 
console.log(emails.size); // 2 

// 3. Operaciones de conjuntos 
let setA = new Set([1, 2, 3]); 
let setB = new Set([3, 4, 5]); 

// Unión 
let union = new Set([...setA, ...setB]); 
console.log(union); // Set {1, 2, 3, 4, 5} 

// Intersección 
let interseccion = new Set([...setA].filter(x => setB.has(x))); 
console.log(interseccion); // Set {3}

// 6.2 Map(Mapa)

// Un Map es una colección de pares clave-valor donde las claves pueden ser de cualquier 
// tipo (objetos, funciones, primitivos).

// Diferencia con Objects 
// Map 
// Claves de cualquier tipo 
// Mantiene orden de inserción 
// Tiene propiedad size 
// Mejor rendimiento para agregar/eliminar´

// Object 
// Claves solo string/Symbol 
// Orden no garantizado siempre 
// Usar 
// Object.keys().length 
// Optimizado para acceso rápido

//Crea un Map

// Map vacío 
let miMapa = new Map(); 

// Map con valores iniciales 
let usuarios = new Map([
["001", "Ana"], 
["002", "Carlos"], 
["003", "María"] 
]);

// 6.2.1 Metodos principales de Map


// Crear map

let productos = new Map(); 

// Agregar o Actualizar
productos.set("laptop", 1200); 
productos.set("mouse", 25); 
productos.set("teclado", 80); 

// para obtener un valor
console.log(productos.get("laptop")); // 1200 
console.log(productos.get("monitor")); // undefined 

// Verificar si existe una clave 
console.log(productos.has("mouse")); // true

// Tamaño 
console.log(productos.size); // 2

// Limpiar todo 
productos.clear(); 

// 6.2.3 iterar un Map

let paises = new Map([ 
["ES", "España"], 
["FR", "Francia"], 
["IT", "Italia"] 
]);

// Iterar entradas (clave-valor) 
for (let [codigo, nombre] of paises) { 
console.log(`${codigo}: ${nombre}`); 
} 

// forEach 
paises.forEach((valor, clave) => { 
    console.log(`${clave} -> ${valor}`); 
});

// Obtener solo claves 
for (let codigo of paises.keys()) { 
    console.log(codigo); 
} 

// Convertir a Array 
let arrayPaises = [...paises]; 
// [ ["ES", "España"], ["FR", "Francia"], ["IT", "Italia"] ]

// 6.2.3 Casos de uso de Map

// 1. Asociar objetos con valores 
let usuario1 = {nombre: "Ana"}; 
let usuario2 = {nombre: "Carlos"}; 
 
let puntuaciones = new Map(); 
puntuaciones.set(usuario1, 95); 
puntuaciones.set(usuario2, 87); 
 
console.log(puntuaciones.get(usuario1)); // 95 
 
// 2. Cache de resultados 
let cache = new Map(); 
 
function operacionCostosa(n) { 
    if (cache.has(n)) { 
        return cache.get(n); 
    } 
    let resultado = n * n; // simulación 
    cache.set(n, resultado); 
    return resultado; 
} 
 
// 3. Contador de frecuencias 
let texto = "hola mundo hola"; 
let palabras = texto.split(" "); 
let frecuencia = new Map(); 
 
for (let palabra of palabras) { 
frecuencia.set(palabra, (frecuencia.get(palabra) || 0) + 1); 
} 
console.log(frecuencia); 
// Map { "hola" => 2, "mundo" => 1 }

// EJERCICIOS 

// Ejercicio 3 Crea un map con traducciones de español  a ingles
// al menos 5 palabras, luego crea una funcion que reciba una 
// palabara en español y la devuelva traducida


let animales = new Map([["flamenco", "flamingo"],
["leon","lion"],
["Aguila","eagle"],
["tiburon","shark"]]);

function traducir(animal) {
    if (animales.has(animal)) {
        return animales.get(animal);
    }

}

    console.log(traducir("leon"));
