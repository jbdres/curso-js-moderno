/** Agregar y elimnar propiedades del objeto  */

const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponible: true
};

console.log(producto);

// Agregar el atributo 'imagen'
producto.imagen = "imagen.png"; // Asignamos el valor con el operador igual
console.log(producto);

// Eliminando el atriubto 'disponibilidad'
delete producto.disponible;
console.log(producto);