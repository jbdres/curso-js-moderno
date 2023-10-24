// Acceder a elementos del HTML con document

/**
 * * Notas
 * * - En el DOM tenemos acceso a un objeto 'document' que basicamente es todo el HTML del documento; por lo cual, siempre lo utilizaremos para acceder a algun elemento del archivo
 * * - La forma en la que la propiedad 'document' devuelve la informacion es en formato 'HTMLCollection', algo muy parecido a un array
 * * - La sintaxis aqui presentada no es la comun para acceder a objetos, hay una mejor manera y se tratara mas adelante
 */

// ----------------

let elemento;

elemento = document; // Asignando todos los datos del HTML
elemento = document.head; // Hace referencia a la primera parte del HTML
elemento = document.body; // Referencia a toda la parte visible del HTML
elemento = document.domain; // URL en la que carga el proyecto
elemento = document.forms; // Referencia a los formulario del proyecto, como cantidad y demas
elemento = document.forms[0]; // Aceder a la informacion de los formulario y sus atributos
elemento = document.forms[0].id; // Atributos del formulario (String)
elemento = document.forms[0].method;
elemento = document.forms[0].classList; // Clases que tiene el formulario, formato de lista
elemento = document.forms[0].className; // String de las clases del formulario
elemento = document.forms[0].action;

elemento = document.links; // To-dos los enlaces que tiene el proyecto
elemento = document.links[4]; // Acceder a un enlace en concreto
elemento = document.images; // Todas las imagenes
elemento = document.images[2];
elemento = document.scripts; // To-dos los scripts

console.log(elemento);