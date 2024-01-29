// Obtener datos de LocalStorage
const nombre = localStorage.getItem('nombre');
console.log(nombre);

    // No existe el identificador
    console.log(localStorage.getItem('nombre2')); // null

/**
 * * Nota: 
 * * - Cuando se almacenan datos en 'localStorage' que deberian tener un formato distinto al de String, se usa 'JSON.parse()' para convertir la informacion. Claro esta que el argumento que se le da a esta funcion debe de tener una syntaxis que coincida ya sea con un objeto, array u otro.
 */

// Obtener y dar fomato a un objeto
const productoJson = localStorage.getItem('producto');
console.log(JSON.parse(productoJson));

// Obtener y dar fomato a un array
console.log(JSON.parse(localStorage.getItem('meses')));
