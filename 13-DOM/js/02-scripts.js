// getElementsByClassName
// Seleccionar elementos por su clase

/**
 * * Notas:
 * * - Cada vez es menos popular la sintaxis pero es importante conocerla
 * * - Hay mejores formas de obtener elementos (Se ve mas adelante)
 */


// Seleccionando un elemento el cual este asociado a esa clase
const header = document.getElementsByClassName('header');
console.log(header); // Elemento obtenido

// Otro elemento
const hero = document.getElementsByClassName('hero');
console.log(hero);

/**
 * Elementos que tienen una misma clase
 * - Se devuelve un 'HTMLCollection' con cada uno de los elementos que coincidan con la clase
 */
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores); // Lista de los elementos que coinciden

// Clase no existente
const noExiste = document.getElementsByClassName('no-existe'); // Especificando una clase que no utiliza en el HTML
console.log(noExiste); // Devuelve una 'HTMLCollection' vacio