
// Vatiables globales (queremos acceder a ellas desde cualquier lado del script)

let currentPage = 1;
let totalPages = 1;
const API_URL = 'https://rickandmortyapi.com/api/character'

// elementos del DOM
const loadingElement = document.getElementById('loading');
const errorElement = document.getElementById('error');
const charactersContainer = document.getElementById('characters-container');
const paginationElement = document.getElementById('pagination');
const prevBtn = document.getElementById('prev-btn');
const nexBtn = document.getElementById('next-btn');
const pageInfo = document.getElementById('page-info');

/*
* Funcion para obtener los personajes de la API
*/

async function fetchCharacters(page = 1) {
    try{
        // Mostrar loading 
        loadingElement.style.display = 'block';
        errorElement.style.display = 'none'
        charactersContainer.innerHTML = '';
        paginationElement.style.display = 'none';

        // Llamada a la API usando fetch, esperamos que consiga alguna respuesta del servidor
        const response = await fetch(`${API_URL}?page=${page}`);

        // Verficar si la respuesta es exitosa
        if(!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`)
        }

        // Si es existosa reclamamo nuestro json de datos
        const data = await response.json();

        // Actualizamos la informacion de la pagina
        currentPage = page;
        totalPages = data.info.pages; // data es nuestra varible almacenada con la respuesta del servidor, en ella llamamos a info que es un objeto del json la cual accedemos a pages que es una variable ya creada ene l objeto que nos dice cuanta paginas tiene 

        // Renderizar a los personajes con data.result en en result del json es donde esta los persoanjes
        renderCharacters(data.results);

        // Mostrar controles de paginacion
        updatePagination();

        // Ocultar loading
        loadingElement.style.display = 'none';


    } catch (error) {
        // Manejar erorres
        console.error('Error al cargar los personajes:', error);
        loadingElement.style.display = 'none';
        errorElement.style.display = 'block';
        errorElement.textContent = `Error al cargar los personajes: ${error.message}`
    }
}

function renderCharacters(characters) {
    charactersContainer.innerHTML = '';

    //Recorremos con un foreach el array
    characters.forEach(element => {
        // Creamos la tarjeta del personaje
        const card = document.createElement('div');
        card.className = 'character-card';

        // Determinar la clase del estado
        const statusClass = element.status.toLowerCase();

        // Construir el HTML de la tarejta
        card.innerHTML = `
        <img src="${element.image}" alt="${element.name}" class="character-image">
        <div class="character-detail">
            <span class="detail-label">Estado:</span>
             <span class="status ${statusClass}">${element}</span>
        </div>
        <div class="character-detail">
        <span class="detail-label">Especie:</span>
        <span>${element.species}</span>
        </div>

        ${element.type ? `
    <div class="character-detail">
        <span class="detail-label">Tipo:</span>
        <span>${element.type}</span>
    </div>
    ` : '' }

    <div class="character-detail">
        <span class="detail-label">Genero:</span>
        <span>${element.gender}</span>
    </div>

    <div class="character-detail">
        <span class="detail-label">Origen:</span>
        <span>${element.origin.name}</span>
    </div>

    <div class="character-detail">
        <span class="detail-label">Localizacion:</span>
        <span>${element.location.name}</span>
    </div>

    <div class="episodes-count">
        Aparece en <strong>${element.episode.length}</strong> episodios
    </div>
        `;

        charactersContainer.appendChild(card);
    });
}

/**
 * Funcion para actualizar los controles de paginacion
 */

function updatePagination() {
    paginationElement.style.display = 'flex';
    pageInfo.textContent = `Página ${currentPage} de ${totalPages}`

    // Deshabilitar todo botón anterior si estamos en la primera página
    prevBtn.disabled = currentPage === 1;

    // Deshabilitar boton siguiente si estamos en la ultima pagina
    nexBtn.disabled = currentPage === totalPages;
}

/**
 *  Event listener para los botones de paginación
 */

prevBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        fetchCharacters(currentPage - 1);
        window.scrollTo({ top: 0, behavior: "smooth"});
    }
}) ;


nexBtn.addEventListener('click', () => {
    if (currentPage < totalPages) {
        fetchCharacters(currentPage + 1);
        window.scrollTo({ top: 0, behavior: "smooth"});
    }
});

// Carga la primera pagina al iniciar
fetchCharacters(1);