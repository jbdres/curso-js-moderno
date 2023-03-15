/** Accediendo a los datos del objeto */
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
};

console.log(producto);

// Tomando valores del objeto con la 'Sintaxis punto'
console.log(producto.nombre);
    // Otra forma (Detallamos la llave como un String)
    console.log(producto['nombre']); // En algunos casos es bastante util

console.log(producto.precio);
console.log(producto.disponible);

