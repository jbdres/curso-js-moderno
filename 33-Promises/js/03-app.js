/** Creando un Promise y .then y .catch */
/**
 * * Notas:
 * - Promise: Es un objeto que representa la terminacion o el fracaso de una operacion asincronica. | https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise 
 * - Esencialmente, una promesa es un objeto devuelto al cual se adjuntan funciones callback, en lugar de pasar callbacks a una funcion.
 */

const aplicarDescuento = new Promise((resolve, reject) => { // Palabras reservadas: resolve (Promise cumplido), reject (Promise rechazado)

    const descuento = true;

    if (descuento) {
        resolve('Descuento aplicado');
    } else {
        reject('No se pudo aplicar el descuento');
    }

});

// console.log(aplicarDescuento);
/** Estados de la promesa:
 * pending: Estado inicial, ni cumplido ni rechazado
 * fulfilled: La operacion se completo con exito
 * rejected: La operacion fallo
 */

aplicarDescuento
    .then(resultado => descuento(resultado))
    .catch(error => descuento(error));

function descuento(message) {
    console.log(message);
}