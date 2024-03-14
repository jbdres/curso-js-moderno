/** Sets y sus caracteristicas */
/**
 * * Nota: 
 * * - Un set crear una lista de valores sin duplicados.
 * * - Cuando se manejan grandes volumenes de datos un set tiende a ser mas rapido que un objeto o un arreglo.
 * * - Algunos metodos de los arreglos aplican para los Sets.
 */

const carrito = new Set();
    // Agregar
carrito.add('Camisa'); // Solo se guarda en el set un valor y no llave-valor.
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Camisa'); // Aunque se ponga un valor ya existente, no se guarda en el set.
carrito.add('camisa'); // Si se guarda! Se diferencian las mayusculas de las minusculas.
    // Conocer el tamano
console.log(carrito.size);
    // Saber si ya existe un elemento
console.log(carrito.has('guitarra')); // Usualmente retorna true o false
    // Eliminar un valor
console.log(carrito.delete('Disco #2')); // Tambien retorna true o false para saber si el elemento fue eliminado o no (si no existe en la lista);
    // Vaciar set
carrito.clear();
    // Los Sets son iterables
carrito.forEach(producto => {
    console.log(producto);
});

console.log(carrito);

// * IMPORTANTE: Eliminar los valores repetidos de un array ya existente
const numerosRepetidos = [10, 20, 30, 40, 50, 10, 20]; // Se repite: 10, 20
const numerosSinRepetir = new Set(numerosRepetidos); // El array a tratar se pasa como argumento en el constructor del set
console.log(numerosSinRepetir); // [10, 20, 30, 40, 50]