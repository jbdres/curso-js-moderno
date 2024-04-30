// Exportar e importar una clase
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
    // Clases
export class Cliente {
    constructor(nombre, ahorro) {
        this.nombre = nombre;
        this.ahorro = ahorro;
    }
    mostrarInformacion() {
        return `Soy ${this.nombre} y tengo $${this.ahorro} dolares`;
    }
}