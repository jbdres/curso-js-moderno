// Algunos metodos y funciones para los 'Strings'
const producto = "Monitor de 20 pulgadas";
console.log(producto);

// Saber la cantidad de letras/caracteres en una cadena de texto
console.log(producto.length);

// Retorna la posicion de la primera ocurrencia de un substring (Diferencia entre mayusculas y minusculas)
console.log(producto.indexOf("Monitor")); // En este caso este substring empieza desde la posicion 0
console.log(producto.indexOf('20')); // Empieza desde la posicion 11

    // Nota: ¿Que pasa si no encuentra alguna coincidencia? Rta. Nos devuelve -1

// Saber si precisamente una subcadena esta o no en el String (Diferencia entre mayusculas y minusculas)
console.log(producto.includes('Monitor')); // Devuelve 'true'
console.log(producto.includes('Zapato')); // Devuelve 'false'