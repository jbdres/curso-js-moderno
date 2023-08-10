/** Arrow Functions en un ForEach y en un map */

// ------------------------------------- curso-js-moderno/08-Arrays/js/10-app.js ------------------------------------- //
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

// .map permite crear un nuevo arreglo con lo que le devolvamos desde el for. (Esto no funciona con forEach) y este arreglo se guarda en la variable que le indicamos
const nuevoArreglo = carrito.map(function (producto) {
    return `${producto.nombre} - Precio: ${producto.precio}`;
})

console.log(nuevoArreglo);
// ------------------------------------------------------------------------------------------------------------------- //

// Usando Arrow Functions para el ejemplo anterior
const nuevoArreglo2 = carrito.map(producto => `${producto.nombre} - Precio: ${producto.precio}`);
console.log(nuevoArreglo2);

    /** ¿Qué es lo que sucedio?
     * 1. Cambio de sintaxis: function(producto){return -codigo-} pasa a: (producto)=>{return -codigo-}
     * 2. Solamente se hace uso de un parametro para la función, así que se quitan los parentesis: producto=>{return -codigo-}
     * 3. Solo hay una linea de codigo en la funcion, se quitan las llaves: producto=>return -codigo-
     * 4. Arrow Function ya infiere que se retorna un valor, se quita el 'return': producto=>-codigo-
     */

// ------------------------------------------------------------------------------------------------------------------- //
// Adicion: uso de un ForEach
carrito.forEach(producto => console.log(`${producto.nombre} - Precio: ${producto.precio}`)); // Aqui se hace uso de Arrow Functions (Observar la sintaxis) 

carrito.forEach(function (producto) { // Sin Arrow Functions
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
})