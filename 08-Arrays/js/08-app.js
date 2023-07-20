/** Destructuring de Arrays */

// Destructuring en un objeto
const producto = {
    nombre: "Monitor de 20 pulgadas",
    precio: 400
};

const {nombre, precio} = producto;
console.log(`El precio del ${nombre} es: $${precio}`);

// Destructuring de un array
const numeros = [10,20,30,40,50,60,70,80,90,100];

/**
 * Nota: A diferencia del destructuring en objetos, para le caso de los arrays el nombre de 
 * las variables en donde van a ser guardados los datos puede ser cualquiera, en este caso:
 * 'primero, segundo, tercero'.
 */
const [primero, segundo, tercero] = numeros;
/**
 * Debido a que no hay forma de identificar los datos del array, estos van a ser guardados de
 * forma secuencial en las variables del destructuring, explicacion: 'primero=10, segundo=20
 * tercero=30' y así sucesivamente. Así que:
 * 
 *   const [primero, tercero] = numeros; // primero=10, tercero=20
 * 
 */

/**
 * Otras formas de utilizar el destructuring:
 * 1. ¿Qué hacemos si no queremos guardar todos los valores sin dejar variables sin usar?
 * 
 *   const [ , , tercero] = numeros; // Los espacios y comas en blanco hacen referencia a los
 *                                      elementos que no seran utilizados; en este caso solo
 *                                      el tercero
 * 
 *   const [primero, , tercero] = numeros; // Solo primer y tercer elemento
 * 
 * --------------------------------------------------------------------------------------------
 * 2. Guardar ciertos elementos del array en un arreglo diferente
 *
 *   const [ , , tercero, , ...otros] = numeros; // Se crea la variable para el tercer elemento y
 *                                                 los valores desde el quinto elemento en 
 *                                                 adelante se guardan en un arreglo llamado
 *                                                 'otros'
 *   console.log(otros); // Rta. [50,60,70,80,90,100]
 */

console.log(primero, segundo);