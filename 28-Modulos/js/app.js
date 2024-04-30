// Heredar una clase que esta siendo importada
import { nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente } from "./cliente.js";
import { Empresa } from "./empresa.js";

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

// Importar empresa: Es buena practica que todos los imports esten al inicio del archivo
const empresa = new Empresa('Codigo con Juan', 100, 'Aprendizaje en linea');
console.log(empresa);