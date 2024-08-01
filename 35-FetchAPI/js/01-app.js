/** Como utilizar FETCH API */
/**
 * * Notas:
 * - FETCH API es nativo de JavaScript
 * - Se pueden enviar o recibir datos
 * - Utiliza promises
 */

// Obtener la informacion de un archivo de texto
const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {

    const URL = './data/datos.txt'
    // Argumento: URL para manejar los datos
    fetch(URL)
        .then(result => {

            // result: Objeto general de la respuesta
            // console.log(result);

            /*
            console.log(result.status);
            console.log(result.statusText);
            console.log(result.url);
            console.log(result.type); */

            // El archivo al cual hacemos referencia en la ruta es de tipo texto, por lo que se usa 'result.text()' y no 'result.json()'.
            return result.text(); // Devuelve un promise

        })
        .then(data => {

            // Contenido de la respuesta
                // * Ya con la informacion aqui; haciendo scripting se muestra en la pagina web
            console.log(data);

        })
        .catch(error => {
            console.log(error);
        })

}