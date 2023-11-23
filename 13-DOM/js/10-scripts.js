// Generar HTML con JavaScript
// Tambien se conoce como 'DOM Scripting'

// Construyendo un enlace
const enlace = document.createElement('a'); // Se pasa el nombre de la etiqueta a agregar (h1, p, nav, etc.)

    // Se puede agregar cualquier atributo
enlace.textContent = 'Nuevo enlace'; // Contenido
enlace.href = '/acercaDe' // Direccion a dirigir
enlace.target = '_blank'

console.log(enlace);

// Mostrar en elemento en el HTML
const navegacion = document.querySelector('.navegacion'); // En donde se va a mostrar?
navegacion.appendChild(enlace);
    /**
     * * - Este metodo literalmente traduce 'Agregar hijo', en este caso, a la navegacion
     * * - El metodo agrega al elemento al final de si mismo
     */

// Colocar el elemento entre uno y otro
navegacion.insertBefore(enlace, navegacion.children[1]); // Argumentos: elemento y ubicacion

// ------------------------------------------------------------------------------------------
// Crear un CARD de forma dinamica

    /** Estructura a replicar (De adentro hacia afuera)
      ** Quinto
    * <div class="contenedor-cards">
            ** Cuarto
            <div class="card">
                ** Tercero
                <img src="img/newyork1.jpg">
                ** Segundo
                <div class="info">
                    ** Primero
                    <p class="categoria clase">Clase</p>
                    <p class="titulo">Comida Japonesa para Principiantes</p>
                    <p class="precio">$300 por persona</p>
                </div>
            </div>
        </div>
    */


// Definiendo parrafos
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto'; // Contenido
parrafo1.classList.add('categoria', 'concierto'); // Clases

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('precio');

// Definiendo div 'info' y anadiendo parrafos
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

// Definiendo img
const img = document.createElement('img');
img.src = 'img/hacer2.jpg'

// Definiendo div 'card' y anadiendo img y div 'info'
const card = document.createElement('div');
card.classList.add('card');
card.appendChild(img);
card.appendChild(info);

// Definiendo div 'contenedor' y anadiendo div 'card'
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.insertBefore(card, contenedor.children[0]);

