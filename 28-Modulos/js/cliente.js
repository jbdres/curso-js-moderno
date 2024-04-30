// Export default y alias a los imports
    // Variables
export const nombreCliente = 'Julian';
export const ahorro = 200;
    // Funciones
export function mostrarInformacion(nombre, ahorro) {
    return `Cliente: ${nombre} - Ahorro: ${ahorro}`;
}

export function tieneSaldo(ahorro) {
    if (ahorro > 0) {
        console.log('Si tiene saldo');
    } else {
        console.log('No tiene saldo');
    }
}

/** Export default
 * - Para el ejemplo, se exportara una funcion
 * - Solo puede haber un export default por archivo
 * - A la funcion no es necesario ponerle un nombre: export default function() {...} | pero ayuda a dar contexto a otros desarrolladores sobre el codigo.
 */

export default function nuevaFuncion() {
    console.log('Este es el export default');
}

// Un segundo export default genera error
// export defult function otraFuncion() {console.log('k');}