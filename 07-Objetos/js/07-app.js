/** Tema: El problema con los objetos */
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
};

console.log(producto);

// No se puede reasignar variables constantes
/* const nombreProducto = 'Monitot';
nombreProducto = 'Tablet'; */

// NOTA: Aunque los objetos esten declarados como constantes sus propiedades si se pueden reasignar
producto.disponible = false;
console.log(producto);

// ¿Como podemos prevenir esto?: Object Methods
// En la siguiente sección