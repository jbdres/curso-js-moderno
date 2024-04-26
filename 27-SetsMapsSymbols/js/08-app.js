/**
 * Iteradores en JavaScript
 */

const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([123, 231, 121, 102]);
const datos = new Map();

datos.set('nombre', 'Julian');
datos.set('profesion', 'Desarrollador Web');

/* Default */
console.log('---------- Default ----------');
for (let ciudad of ciudades) {
    console.log(ciudad);
}
for (let orden of ordenes) {
    console.log(orden);
}
for (let dato of datos) {
    console.log(dato);
}


/* Keys iterator */
console.log('---------- Keys ----------');
for (let key of ciudades.keys()) {
    console.log(key);
}
for (let key of ordenes.keys()) {
    console.log(key);
}
for (let key of datos.keys()) {
    console.log(key);
}

/* Values Iterator */
console.log('---------- Values ----------');
for (let value of ciudades.values()) {
    console.log(value);
}

for (let value of ordenes.values()) {
    console.log(value);
}

for (let value of datos.values()) {
    console.log(value);
}


/* Entries Iterator
    .entries() retorna llave y valor de cada elemento en la coleccion; si solamente hay valor, el metodo agrega la llave.*/

console.log('---------- Entries ----------');
for (let entry of ciudades.entries()) {
    console.log(entry);
}

for (let entry of ordenes.entries()) {
    console.log(entry);
}

for (let entry of datos.entries()) {
    console.log(entry);
}
