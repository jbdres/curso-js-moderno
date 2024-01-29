// Eliminar y Actualizar elementos de LocalStorage
localStorage.removeItem('nombre');


// Actualizar un registro
/**
 * * Nota:
 * * - Como tal no hay un metodo para actualizar un registro en LocalStorage, lo que se podria hacer es reescribir el registro; teniendo en cuenta el mismo identificador pero con distinta informacion
 */

const mesesArray = JSON.parse(localStorage.getItem('meses')); // Obteniendo array
console.log(mesesArray);

mesesArray.push('Nuevo mes'); // Modificando array
console.log(mesesArray);
localStorage.setItem('meses', JSON.stringify(mesesArray)); // Reescribiendo array


// Limpiar localStorage
localStorage.clear();