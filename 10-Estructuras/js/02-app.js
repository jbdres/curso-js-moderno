/** Comparador Estricto */
/**
 * != diferente
 * == igual a
 */

const puntaje = 1000;

// Comparador normal
// if (puntaje == "1000") {
//     console.log("Si es igual!"); // Salida: Si es igual
// }

// Comparador estricto
/**
 * * == Compara solamente el valor de la variable
 * * === Compara tanto el valor de una variable como su tipo
 */

if (puntaje === "1000") {
    console.log("Si es igual");

} else {
    console.log("No es igual"); // Salida: No es igual
}
