// querySelector
/**
 * * Notas
 * * - Se parece en ciertas cosas a 'getElementById', como en que solamente devuelve un elemento como maximo
 * * - Permite seleccionar ids, clases
 * * - Solo retorna un elemento
 * * - Para todo los argumentos se utiliza sintaxis muy similar a una hoja de estilos en css
 */

const card = document.querySelector('.card'); // Se pasa un selector como si fuera de css
console.log(card);

// Selectores especificos como en css
const info = document.querySelector('.premium .info');
console.log(info);

// Seleccionar el segundo card de hospedaje
const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
console.log(segundoCard);

// Seleccionar el formulario por id
const formulario = document.querySelector('#formulario');
console.log(formulario);

// Seleccionar elementos html
const navegacion = document.querySelector('nav'); // Se pone el nombre de la etiqueta\
console.log(navegacion);