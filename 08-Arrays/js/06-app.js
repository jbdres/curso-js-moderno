/** Crear un arreglo con el spread operator */
/**
 * Spread operator: Caracteristica introducida en ECMAscript6 (ES6)
 * Se utiliza para descomponer o separa elementos de una estructura de datos iterable
 * (como un array o un objeto) en elementos individuales
 */

const carrito = [];

const producto = {
    nombre: 'Montior de 20 pulgadas',
    precio: 400
};

const producto2 = {
    nombre: 'Celular',
    precio: 800
};

const producto3 = {
    nombre: 'Teclado',
    precio: 50
};

// Funciones imperativas (Trabajamos con una variable y esta es la que se modifica)
// Funciones declarativas (Trabajamos con una variable pero no la modificamos directamente)

let resultado = [...carrito, producto];
resultado = [...resultado, producto2]; // Agregando el producto al final
resultado = [producto3, ...resultado]; // Agregando el producto al inicio


console.log(resultado);
console.log(carrito); // La variable 'carrito' nunca se modifico