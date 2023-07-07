/** Acceder a los valores de un Array */
const numeros = [1,2,3,4,5,6,7];
console.log(numeros);

// Mediante una tabla (Obtener el indice del array con su respectivo valor)
console.table(numeros);

// Obtener el valor dada su posicion
console.log(`${numeros[0]},${numeros[2]}`); // Primera y segunda posicion

// Posicion que no existe
console.log(numeros[20]); // Se crea el espacio pero no se asigna. Rta. Undefined 
