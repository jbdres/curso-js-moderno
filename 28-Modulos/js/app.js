/** Export default y alias a los imports
 * - Al traer un export default desde otro archivo, este va por fuera de las llaves {} y con coma ,
 * - Al solo poder tener un export default por archivo, no importa el nombre con el que se traiga el elemento, en este ejemplo, la funcion en cliente.js tiene como nombre 'nuevaFuncion' y aqui se llama con 'otroNombre', sin embargo, es recomendable que tenga el mismo.
 */

import otroNombre, { nombreCliente as ac, ahorro, mostrarInformacion as mi, tieneSaldo} from "./cliente.js";
otroNombre(); // export default

    // Variables
console.log(ac); // usando alias
console.log(ahorro);
    // Funciones
console.log(mi(ac, ahorro)); // Usando alias
tieneSaldo(ahorro);
