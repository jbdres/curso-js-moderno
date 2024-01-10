// Prevenir Event Bubbling con un metodo

/**
 * * Nota: El codigo detalla la creacion completa de un card desde cero para incluirlo al HTML desde JavaScript; A su vez tambien se utiliza un metodo dentro del card para evitar el Event Bubbling en el parrafo3.
 * 
 * Estructura del card:
 * 
 *   <div class="contenedorCard">
 *      <img src="img/hacer2.jpg">
 *      <div class="info">
 *         <p class="categoria concierto">Concierto</p>
 *         <p class="titulo">Concierto de Rock</p>
 *         <p class="precio">$800 por persona</p>
 *      </div>
 *   </div>
 * 
 */

// ------------------------------------------------

// Primer parrafo
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria');
parrafo1.classList.add('concierto');

// Segundo parrafo
const parrafo2 = document.createElement('P');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

// Tercer parrafo
const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

    // --------------------- Prevencion Event Bubbling ---------------------

/**
 * * Nota:
 * * - El metodo con el que se previene es: onclick por parte del elemento el cual llama una funcion para tomar accion. 
 * * - Esta forma de codigo es usualmente utilizada cuando se crea contenido desde JavaScript y cuando se consume una API de algun servicio. (Totalmente recomendado).
 */

parrafo3.onclick = function() { // Funcion que da paso a ota; esta ultima da la posibilidad de recibir y tratar argumentos al dar click sobre el elemento
    nuevafuncion(1); // Llamada
};

// Funcion principal
function nuevafuncion(id) {
    console.log('Click en el parrafo 3 | id: ' + id);
}

    // ---------------------------------------------------------------------

// Crear div de informacion
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3);

// Asignacion de imagen del card
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

// Crear el div de card
const contenedorCard = document.createElement('div');
contenedorCard.classList.add('contenedorCard');

// Asignando la imagen al card y el div de informacion
contenedorCard.appendChild(imagen);
contenedorCard.appendChild(info);

// Insertar el card al HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(contenedorCard); // al inicio info