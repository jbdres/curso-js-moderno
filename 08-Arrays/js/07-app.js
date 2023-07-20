/** Eliminar elementos con Splice */
// Funciones imperativas (Trabajamos con una variable y esta es la que se modifica)
// Funciones declarativas (Trabajamos con una variable pero no la modificamos directamente)

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

carrito.push(producto, producto2);
carrito.unshift(producto3);

console.table(carrito);

// Eliminar ultimo elemento del arreglo
carrito.pop();
console.table(carrito);

// Eliminar el primer elemento del arreglo
carrito.shift();
console.table(carrito);

// Elimiar elementos en medio del array con splice
carrito.splice(1, 2); // Pide dos datos: La posicion desde el que vamos a eliminar y la cantidad de elementos a eliminar desde ese index.
    // En este caso, se empieza desde la posicion 1 y vamos a eliminar 2 elementos
console.table(carrito);
