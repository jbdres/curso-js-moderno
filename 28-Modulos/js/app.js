// Exportar e importar una clase
import { nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente } from "./cliente.js";
    // Variables
console.log(nombreCliente);
console.log(ahorro);
    // Funciones
console.log(mostrarInformacion(nombreCliente, ahorro));
tieneSaldo(ahorro);
    // Clases
const cliente = new Cliente(nombreCliente, ahorro);
console.log(cliente);
console.log(cliente.mostrarInformacion());