/** .map para iterar un array, y sus diferencias con forEach */
// Array de objetos
const carrito = [
    { nombre: "Monitor de 27 pulgadas", precio: 500 },
    { nombre: "Television", precio: 100 },
    { nombre: "Tablet", precio: 200 },
    { nombre: "Audifonos", precio: 300 },
    { nombre: "Teclado", precio: 400 },
    { nombre: "Celular", precio: 700 }
];

// .map permite crear un nuevo arreglo con lo que le devolvamos desde el for. (Esto no funciona con forEach)
const nuevoArreglo = carrito.map(function (producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
})
// Este podría ser util para determinar en un array los 10 producto mas vendidos de la tienda o algo asi


console.log(nuevoArreglo);