// Traversing the DOM
/**
 * * Notas:
 * * - Que es? Es la forma en la que se recorren los distintos elementos de 'document'
 */

const navegacion = document.querySelector('.navegacion');
console.log(navegacion); // Dentro de la clase, hay cuatro nodos (enlaces)

// Primer y ultimo elemento dentro de otro
console.log(navegacion.firstElementChild); // Primero
console.log(navegacion.lastElementChild); // Ultimo

// Acceder a los nodos
console.log(navegacion.childNodes); // Los espacios en blanco son conciderados como elementos
    /**
     * * Los espacios en blanco anteriores, son realmente los saltos de linea entre los elementos dentro de 'navegacion' en el archivo HTML. Para que estas inconcistensias no sucedan, podemos utilizar 'children', que enumera los elementos reales del archivo.
     */

console.log(navegacion.children); // Lista elementos reales (Recomendado)
console.log(navegacion.children[1].nodeName); // Muestra la etiqueta del cual es el elemento
console.log(navegacion.children[1].nodeType); // Retorna un valor positivo entero representando el tipo de nodo | Mas informacion: https://developer.mozilla.org/es/docs/Web/API/Node/nodeType

// Otro ejemplo
const card = document.querySelector('.card'); // Seleccionando el primer card
console.log(card.children[1].children);

    /**
     * * Explicacion:
     * * - Dentro de la clase 'card' hay una imagen un div, se esta accediendo a este ultimo y listando los elementos que tiene dentro de si, en este caso 3 parrafos.
     */

// Accediendo al tercer parrafo
console.log(card.children[1].children[2]);

// -----------------------------------------------------------------------------------------------
// Traversing del hijo al padre
console.log(card.parentNode); // Toma en cuenta los espacios en blanco
console.log(card.parentElement); // Recomendado
console.log(card.parentElement.parentElement.parentElement); // Devolviendonos hasta el main

// Traversing a los hermanos
console.log(card.nextElementSibling); // Siguiente hermano
console.log(card.nextElementSibling.nextElementSibling); // Siguiente del siguiente

console.log(card.previousElementSibling); // Devuelve 'null' porque antes del primer card no hay nada

const ultimoCard = document.querySelector('.card:nth-child(4)');
console.log(ultimoCard); // Ultimo card
console.log(ultimoCard.previousElementSibling); // Penultimo card