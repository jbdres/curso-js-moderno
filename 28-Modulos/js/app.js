// Basicos de los modulos en ES6
/* ------ Llamar a una variable en otro archivo js, este archivo se llama desde el mismo HTML y no es type="module". Es la forma en la que se ha hecho hasta el momento, sirve de ejemplo ------ */

// console.log(nombreUsuario);
    // Ya que 'nombreUsuario' en cliente.js se define en una funcion IIFE, solo se tiene acceso local a la variable, osea en el archivo en el que se define... por lo cual se imprime 'Andres' y no 'Julian', gracias a que 'Andres' esta en la variable global.

/* ------ Importar variables desde otro archivo ------
   - Para que esto funcione, cuando se vincule este archivo js al HTML, tiene que ser de tipo 'module', asi: <script src="js/app.js" type="module"></script> 
*/

import { nombreCliente } from "./cliente.js";
import { ahorro } from "./cliente.js";

console.log(nombreCliente);
console.log(ahorro);