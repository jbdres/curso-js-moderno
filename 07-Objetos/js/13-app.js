/** Object .keys, .values y .entries */

const producto = {
    nombre: 'Monitor de 20 pulgadas',
    precio: 300,
    disponible: true
}

// .keys (Retorna un string[] con el nombre de las propiedades del objeto)
console.log(Object.keys(producto)); // ['nombre', 'precio', 'disponible']

// .values (Retorna un string[] con el valor de las propiedades del objeto)
console.log(Object.values(producto)); // ['Monitor de 20 pulgadas', '300', 'true']

// .entries (Retorna en pares tanto el nombre como el valor de la propiedad del objeto)
console.log(Object.entries(producto));
// (La verdad este ultimo es muy util)