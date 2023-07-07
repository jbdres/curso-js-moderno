/** Sellar un objeto */
"use strict";

/** ¿Cual es la diferencia entre 'freeze' y 'seal'
 *  Cabe aclarar que ninguna de las dos opciones nos permite agregar o eliminar propiedades del objeto
 *  sin embargo, 'seal' si nos permite modificar las propiedades existentes; algo que con 'freeze' no 
 *  es posible.
*/

// Objeto de prueba
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 300,
    disponibilidad: true
};

// Sellando el objeto
Object.seal(producto);

// Modificando propiedades
producto.disponibilidad = false;
console.log(producto);

// Verificando que el objeto este o no sellado
console.log(Object.isSealed(producto));