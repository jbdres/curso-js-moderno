/**
 * Generadores en JavaScript
 * - Un generador es una funcion que retorna un iterador
 */

function *crearGenerador() { // Generador: '*' antes del nombre de la funcion
    // Valores que nuestro generador va a iterar: (con la palabra reservada 'yield')
    yield 1;
    yield 'Juan';
    yield 3+3;
    yield true;
}

// Asignar el generador a una variable
const iterador = crearGenerador();

console.log(iterador); 
/* 
- Al mostrar el iterador, se muestra el estado actual, si faltan datos por iterar (suspended), o por el contrario ya estan todos (closed)
- Metodos en Prototype del generado:
    <next> : Permite iterar cada elemento sobre el generador
*/

// --------------------------------------------------------------
// Usar el iterador
// next(): Muestra dos datos, el primero es es siguiente valor por iterar en el generador; el segundo es un boolean para saber si todos los elementos en el generador han sido iterados. => {value, done}

console.log(iterador.next()); // {1, false}
/* Acceder a las propiedades
    console.log(iterador.next().value); // Juan
    console.log(iterador.next().done); // false
*/
console.log(iterador.next()); // {Juan, false}
console.log(iterador.next()); // {6, false}
console.log(iterador.next()); // {true, false}

/**
 * * Hasta este punto todos los datos del generador han sido iterados */
console.log(iterador.next()); // {undefined, false}
console.log(iterador); // Estado: closed


// --------------------------------------------------------------
// Generador para carrito de compras
function *nuevoGenerador (carrito) {
    for(let i = 0; i < carrito.length; i++) {
        yield carrito[i];
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];
const iteradorCarrito = nuevoGenerador(carrito);

console.log(iteradorCarrito);
console.log(iteradorCarrito.next()); // {'Producto 1', false}
console.log(iteradorCarrito.next()); // {'Producto 2', false}
console.log(iteradorCarrito.next()); // {'Producto 3', false}
console.log(iteradorCarrito.next()); // {undefined, true}