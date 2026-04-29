// Muestra con un for los atributos y definiciones dle objeto libro

const libro = {
    autor: 'Geronimo Stilton',
    libros: 'El reino de la fantasia',
    páginas: 200
}

// libro.forEach(element => {
//     console.log(element)
// });

for (const element in libro) {
    console.log(`${element}: ${libro[element]}`)
}