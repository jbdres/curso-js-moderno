/** Iteradores en JavaScript
 * - Crear un iterador propio
 */

function crearIterador(carrito) { // El parametro de la funcion es el elemento a iterar
    let i = 0; // contador
    return {
        siguiente: () => { // definir la funcion
            const fin = ( i>=carrito.lenght ); // Fin de la iteracion
            const valor = !fin ? carrito[i++] : undefined; // Valor actual | Recordar: presedencia de operadores i++ != ++i
            return {
                fin,
                valor
            }
        }
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

// Utilizar el iterador
const recorrerCarrito = crearIterador(carrito);
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente());

carrito.push('Producto nuevo');
console.log(recorrerCarrito.siguiente());
console.log(recorrerCarrito.siguiente()); // undefined