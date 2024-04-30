// Basicos de los modulos en ES6
/**
 * Utilizar elementos de este archivo en otros.
 * - Facilmente nosostros podriamos llamar a cada uno de los archivos javascript desde el mismo HTML, cada archivo tendria acceso a la informacion del otro. Cuando se trabaja con varias personas, esta metodologia puede tener varios inconvenientes como variables con el mismo nombre pero definidas en archivos distintos, etc.
 * - Existen formas para utilizar datos de otro archivo .js, como: funciones IIFE y export.
 */

/** ----------------------------------------------
// IIFE: Poner el codigo en una funcion que se ejecuta inmediatamene,a las variables aqui definidas se tiene solo acceso desde el mismo archivo, a menos que se pongan en la ventana global.
* ! Para probar esta funcion hay que descomentarla y llamarla desde el HTML y comentar el bloque de codigo de 'export' e 'import' en el archivo 'apps.js' para este ultimo. Tambien se descomenta la salida a consola en la linea 3 de 'app.js'.
*/
 
/* (function() {
    console.table('Desde un IIFE');
    const nombreUsuario = 'Carlos'; // Acceso local a la variable
    window.nombreUsuario = 'Rodriguez'; // Acceso global a la variable
        // Desventaja: La ventana global se estaria llenando de codigo innecesario
})(); // Estos ultimos parentesis son los que ejecutan la funcion inmediatamente */

//-------------------- export --------------------
export const nombreCliente = 'Julian';
export const ahorro = 200;