/** Congelar un objeto para no poder modificarlo */
"use strict"; /** Hace que cuando estamos trabajando en el documento tengamos que cumplir con ciertas reglas, algo así como hacer uso de buenas practicas al momento de escribir código.

Por ejemplo, sin este 'use strict', podríamo:
x = 20;
console.log(x); // Y no pasaría absolutamente nada y lo toma como una variable normal para al habilitar dicha opcion nos obliga a definir esta variable correctamente.

Este también habilita ciertos metodos para los objetos
*/

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
};

Object.freeze(producto) // Congelando ese objeto para no ser modificado;

// ¿Como sabemos que el objeto esta congelado
console.log(Object.isFrozen(producto)); // Salida: verdadero o falso

// NOTA: Si quisieramos volver a ese objeto modificable tendríamos que duplicarlo y trabajar sobre la copia