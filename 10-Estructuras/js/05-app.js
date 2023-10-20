// Switch para evaluar multiples condiciones

/**
 * La estructura 'Switch' se utiliza con existe un bloque de codigo con demasiadas
 * condiciones que evaluar, lo que hace que se vea desordenado y en algunos casos
 * sea dificil de entender. 'Switch' permite hacer evaluaciones de manera rapida y
 * sencilla.
 */

const metodoPago = "efectivo";

/**
 * Notas:
 * - El 'case' en el switch no es obligatorio ponerlo, pero el 'default' si.
 * - El bloque de codigo a seguir para cada case no se limita, se puede hacer cualquier cosa
 *   como: llamar funciones, utilizar ciclos y demas.
 */

switch (metodoPago) { // Distintos valores para una sola variable
    case "tarjeta": // El 'case' represente el posible valor que puede tener la variable
        console.log(`Pago con tarjeta`); /** Bloque de codigo
                                             que se ejecuta si el
                                             valor propuesto conincide
                                             con el de la variable.
                                         */
        break; // Determina el cierre de las instruciones para el case y da paso a otro
    
    // Otros condicionales
    case "cheque":
        console.log("Pago con cheque");
        break;
    
    case "efectivo":
        console.log("Pago con efectivo");
        break;

    default: // Se ejecuta si ninguna de las validaciones previas resulta ser cierta
        console.log("Aun no has seleccionado un metodo de pago");
        break;
}