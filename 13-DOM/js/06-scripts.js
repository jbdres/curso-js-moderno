// Modificar Textos o Imagenes con JS

/**
 * * Nota:
 * * - Cuando seleccionamos un elemento del HTML, desde el navegador 'moxilla developer' se podran ver absolutamente todos los atributos del elemento; algo que no sucede con 'chrome' o 'edge'
 */

const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

// Accediendo al contenido del elemento
console.log(encabezado.innerText);
    /**
     * * Nota:
     * * - Si la hoja de estilos tiene para el elemento, la propiedad 'visibility: hidden', no sera posible encontrar el texto o el elemento< en cambio para 'textContent' aun asi se encontrara.
     */

console.log(encabezado.textContent);
console.log(encabezado.innerHTML); // Trae el HTML que se tiene

// Otra manera de acceder al texto del elemento ahorrando lineas de codigo (Chaning)
console.log('Haciendo Chaning o Encadenamiento');
const encabezado2 = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado2);

// --------------- MODIFICANDO ---------------
// Texto
document.querySelector('.contenido-hero h1').textContent = 'nuevo heading';

// Imagen
const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';