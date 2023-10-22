/** Detener la ejecucion de un if con una funcion */
// Buenas practicas

// Detener la ejecucion de un if con una funcion

/**
 * * Ejecucion normal de un if
 *  const puntaje = 450;
    if (puntaje > 400) {
        console.log("Excelente!!");
    } else if (puntaje > 300) {
        console.log("Buen puntaje... felicidades");
    }
    
 * * Otra opcion: Separar los if para no utilizar 'else'
    if (puntaje > 400) {
        console.log("Excelente!!");
    }
    if (puntaje > 300) {
        console.log("Buen puntaje... felicidades");
    }
 */

// Una opcion real en el trabajo
const puntaje = 500;
function revisarPuntaje () {
    if (puntaje > 400) {
        console.log("Excelente!!");
        return; /* Si llega a esta linea de codigo, deja de ejecutar todo lo demas 
                (Solo sirve en funcione) */
    }

    console.log("Comprobando proceso"); // Esta linea no se ejecuta
    if (puntaje > 300) {
        console.log("Buen puntaje... felicidades");
        return; // Mismo proceso
    }
}

// Hay que llamar la funcion anterior
revisarPuntaje();