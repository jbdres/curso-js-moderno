// Cambiando el CSS con JavaScript
const encabezado = document.querySelector('h1');
console.log(encabezado.style);

/** --------------------------------------------------------------------------------------------
 * * Poner estilos en su respectiva hoja de estilos
 * background-color
 * * Poner estilos con JavaScript
 * backgroudColot --> Se quita el guion de en medio y se utiliza la siguiente letra en mayuscula
 * ---------------------------------------------------------------------------------------------
 */ 

encabezado.style.backgroundColor = 'red';
encabezado.style.fontFamily = 'Arial';
encabezado.style.textTransform = 'uppercase';

const card = document.querySelector('.card');
console.log(card.classList); // Clases que tiene el elemento
card.classList.add('nueva-clase', 'segunda-clase'); // Se anaden clases
console.log(card.classList); // Verificando
card.classList.remove('nueva-clase'); // Se elimina la clase especificada
console.log(card.classList); // Verificando