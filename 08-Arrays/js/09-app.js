/** .forEach para iterar un array */
// Array de objetos
const carrito = [
    { nombre: "Monitor de 27 pulgadas", precio: 500 },
    { nombre: "Television", precio: 100 },
    { nombre: "Tablet", precio: 200 },
    { nombre: "Audifonos", precio: 300 },
    { nombre: "Teclado", precio: 400 },
    { nombre: "Celular", precio: 700 }
];

// For loop
for (let i = 0; i < carrito.length; i++) {
    console.log(`${carrito[i].nombre} - Precio: ${precio}`);
}

// For each
carrito.forEach( function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
});

// For each (mas corto)
carrito.forEach(producto => {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
});