/** Que son los Maps?  */
/**
 * Los maps son listas ordenadas en llave y valor (Algo asi que un objetivo con una sola propiedad). Los maps son como otra forma de crear objetos.
 * - Tanto la llave como el valor pueden ser de cualquier tipo de dato
 * - Si se va a estar agregando, quitando y modificando elementos, es mejor utilzar un map que un objeto
 * - Tienen mejor performance que un objeto
 */

const cliente = new Map();
cliente.set('nombre', 'karen'); // Anadir datos
cliente.set('tipo', 'premium');
cliente.set('saldo', 3000);
cliente.set(true, true);

console.log('cliente :>> ', cliente);
console.log(cliente.size); // Tamano
console.log(cliente.has('nombre')); // Saber si un elemento existe
console.log(cliente.get('nombre')); // Obtener un valor

cliente.delete('saldo'); // Eliminar un valor
console.log(cliente.has('saldo')); // False
console.log(cliente.get('saldo')); // Undefined

cliente.clear(); // Limpiar todo el map
console.log(cliente);


// Iniciar un map con valores
const paciente = new Map([['nombre', 'paciente'], ['cuarto', 'no definido']]); // Un array dentro de otro, el array interno esta compuesto por llave-valor
console.log('paciente :>> ', paciente);

paciente.set('dr', 'Dr Asignado'); // Agregar
paciente.set('nombre', 'Antonio'); // Reescribir una propiedad 

// Iterar un map
paciente.forEach((valor, llave) => { // Primero toma como argumento el valor y despues la llave de la propiedad
    console.log(valor);
    console.log(llave);
});


// Un objeto normal
const cliente2 = {
    nombre : 'karen',
    tipo : 'premium',
    saldo : 3000
}

console.log('cliente2 :>> ', cliente2);