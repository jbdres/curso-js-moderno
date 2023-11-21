// querySelectorAll
/**
 * * Notas:
 * * - Devuelve todos los valores que coincidan con los especificado, en un NodeList
 * * - La sintaxys es la misma que en 'querySelector'
 */

const card = document.querySelectorAll('.card');
console.log(card);

// Cuando se repiten un id en el html (JavaScript no lo valida)
const formularios = document.querySelectorAll('#formulario');
console.log(formularios);

// Especificar un valor que no existe
const noExiste = document.querySelectorAll('no-existe');
console.log(noExiste); // Devuelve un NodeList vacio