// utilizando MAP

//  Ejercicio 15: metodo de transofrmacion de objetos
// Crea array de objeto estudiantes con nombre y notas....
// Calcula el promedio de nota de cada estudiante y crea un nuevo array con los resultados transormados


const estudiantes = [
    {nombre: "Alba", notas: [8,7,9,8]},
    {nombre: "bruno", notas: [6,7,5,8]},
    {nombre: "Clara", notas: [9,9,10,9]},
    {nombre: "Alba", notas: [5,6,4,5]}
]

    const notas = estudiantes.map(

        function(estudiante){
            // calcular el promedio de las notas
            const nota = estudiante.notas.reduce((total, nota) => total + nota, 0)
            const promedio = suma / estudiante.notas.length

            // determinamo si aprobo
            const aprobado = promedio >= 5

            return {
                nombre: estudiante.nombre,
                notas: estudiante.notas,
                promedio: promedio.toFixed(2), // redondeo con 2 decimales
                aprobado: aprobado,
                clasificacion: promedio >= 9 ? "Sobresaliente":
                                promedio >= 7 ? "Notable":
                                promedio >= 5 ? "Aprobado" : "Suspenso"
            }

        }
    )
    console.log(notas);

