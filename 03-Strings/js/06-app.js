/* String Methods: Repeat y Split * */
const producto = "Monitor de 20 pulgadas";

// .repeat (repetir una cadena de texto)
const texto = ' en Promocion'.repeat(3); // Repite el texto 3 veces

console.log(texto);
console.log(`${producto} ${texto} !!!`)

const texto2 = ' en Promocion'.repeat(2.4); // El valor se redondea a 2
console.log(texto2);

// .split (dividir un string)
const actividad = "Estoy aprendiendo JavaScript moderno";
console.log(actividad.split(" ")); // Cada que encuentre un espacio separa el string

// Ejercicio: (lista de hobbies)
const hobbies = "Leer, programar, estudiar, escuchar musica, escribir";
console.log(hobbies.split(", "))
