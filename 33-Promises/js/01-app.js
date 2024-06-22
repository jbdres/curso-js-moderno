/** Ejemplo de Callbacks */
/**
 * * Nota:
 * - Una funcion de callback es una funcion que se pasa a otra funcion como un argumento, que luego se invoca dentro de la funcion externa para completar algun tipo de rutina o accion.
 */

// Ejemplo: Actualizar el listado de paises mostrado despues de que uno nuevo se haya agregado, mediante callbacks. | Este es un callback sincronico, ya que se ejecuta inmediatamente.

const paises = ['Francia', 'Espania', 'Portugal', 'Australia', 'Inglaterra'];

function nuevoPais(pais, callback) { // 'callback' es una funcion cualquiera.
    setTimeout(() => {
        paises.push(pais);
        callback();
    }, 2000);
}

function mostrarPaises() {
    setTimeout(paises.forEach (pais => {
        console.log(pais);
    }), 1000);
}

mostrarPaises();
nuevoPais('Alemania', mostrarPaises); // Uso de callback