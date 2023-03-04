/* Cortar espacios en un String * */
const producto = '                   Monitor de 20 pulgadas            ';

console.log(producto);
console.log(producto.length); /* Result: 53 caracteres* */
    /* Todos esos espacios en blanco son considerados como parte de la cadena de texto. * */


/* Quitar el espacio en blanco al inicio */
console.log(producto.trimStart());
console.log(producto.trimStart());

/* Quitar el espacio en blanco al final */
console.log(producto.trimEnd());

// Quitar espacios tanto al inicio como al final (Nota: Metodos de forma encadenada)
console.log(producto.trimStart().trimEnd());


/* Quitar el espacio en blanco en ambas direcciones al mismo tiempo (Esto cuando se es necesario y no se quiere eliminar en una sola direccion) * */
console.log(producto.trim());