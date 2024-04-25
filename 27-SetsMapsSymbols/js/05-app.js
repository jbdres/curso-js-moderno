/** Symbols y sus caracteristicas
 * - Sirven para crear una propiedad unica, no hay dos symbols iguales
 * - Las propiedades de un objeto que esten definidas por medio de un Symbol no son iterables
 */

const sym = Symbol();
const sym2 = Symbol();

if (sym === sym2) {
    console.log("Son iguales");
} else {
    console.log('Son diferentes'); // Resultado | Los symbols no son iguales
    /* Incluso */ // console.log(Symbol() === Symbol());
}


const nombre = Symbol();
const apellido = Symbol();
const persona = {};

// Agregar a nombre y apellido como llaves del objeto
persona[nombre] = 'Julian';
persona[apellido] = 'Bermudez';
    // Atributo normal
persona.tipoCliente = 'Premium';
persona.saldo = 500;

console.log(persona);
console.log(persona[nombre]); // Acceder al valor del symbol, que es propiedad en el objeto
// console.log(persona[tipoCliente]); // Error

// Las propiedades que utilizan un symbol no son iterables
for(i in persona) {
    console.log(i); // Salida: tipoCliente, saldo
}

// Cuando se crea un symbol se le puede agregar una descripcion
const nombreCliente = Symbol('Nombre del cliente');
const cliente = {};
cliente[nombreCliente] = 'Pedro';
console.log(cliente);
console.log(cliente[nombreCliente]); // Valor del Symbol