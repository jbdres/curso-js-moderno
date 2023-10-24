// getElementById
/**
 * * Notas:
 * * - La sintaxis se vuelve cada vez menos popular | Mejor opcion: querySelector
 * * - Es buena practica que todos los id en el proyecto sean distintos, aunque si por algun motivo este se llega a repetir en mas de un elemento, el programa no generaria error ni advertencia con la cual se posible darse cuenta; a menos que se pase por un validador de html.
 * * - Si hay un id repetido, la sintaxis devuelve al primer elemento que encuentra con ese id, dando paso a posibles errores o confusiones.
 */

const formulario = document.getElementById('formulario');
console.log(formulario); // Devuelve el formulario que coincida

// Especificar un id que no existe
const noExiste = document.getElementById('no-existe');
console.log(noExiste); // Devuelve null