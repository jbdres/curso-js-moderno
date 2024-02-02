// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
const contenido = document.querySelector('#contenido');
let tweets = [];

// Event Listeners
eventListeners();

function eventListeners() {
    // Evento de envio en el formulario
    formulario.addEventListener('submit', agregarTweet);
    // Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        /**
         * * Nota:
         * * - El codigo anterior dice que si la busqueda del elemento en localStorage devuelve 'null' (que no se encuentra), asigna a 'tweets' un arreglos vacio. (Esta sintaxis se pueda usar para muchos mas casos).
         */
        crearHtml();
    });
}

// Funciones
function agregarTweet(e) {
    e.preventDefault();

    // Valor del textArea
    const tweet = document.querySelector('#tweet').value.trim();
    if (!tweet) { // Si esta vacio
        limpiarAlertas(); // Limpiar alertas existentes
        mostrarError('Un mensaje no puede ir vacio'); // Alerta
        return;
    }
    
    // Dando un identificador a cada tweet y asociando
    const tweetObj = {
        id : Date.now(),
        tweet // tweet : tweet // Hace referencia a la variable tweet de arriba

        /**
         * * Nota:
         * * - Cuando tanto el atributo como el valor de un objeto se puede asociar con el misma variable se puede omitir la asignacion.
         */
    }

    // Agregar al arreglo de tweets
    tweets =  [...tweets, tweetObj]; // Copia el arreglo existente y agrega el registro

    // Mostrar en HTML
    crearHtml();
    
    // Reiniciar el formulario
    formulario.reset();
}

    // Mostrar mensaje de error
function mostrarError(error) {

        // Creando elemento HTML
    const mensajeError = document.createElement('P');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');
    
        // Insertarlo en el contenido
    contenido.appendChild(mensajeError);

    // Quitar alerta a los 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 2000);
}

function limpiarAlertas() {
    const errorExiste = contenido.querySelector('.error');
    if (errorExiste) {
        errorExiste.remove();
    }
}

    // Muestra un listado de los tweets
function crearHtml() {
    limpiarTweets();
    if (tweets.length > 0) {
        tweets.forEach(tweet => {
            // Agregar un boton de eliminar
            const btnEliminar = document.createElement('A');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerHTML = 'X';
                // Agregar la funcion de eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }
                // Si no se pasaran parametros: btnEliminar.onclick = borrarTweet();

            const li = document.createElement('li');
            li.innerHTML = tweet.tweet;

            li.appendChild(btnEliminar);

            listaTweets.appendChild(li);


        });
    }
    
    sincronizarStorage();
}

// Agrega los tweets actuales al storage
function sincronizarStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function limpiarTweets() {
    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}

function borrarTweet(id) {
    // Se guarda un nuevo array en el que los tweets tengan distinto id al seleccionado
    tweets = tweets.filter(tweet => tweet.id !== id);
    // Actualizando informacion
    crearHtml();
}