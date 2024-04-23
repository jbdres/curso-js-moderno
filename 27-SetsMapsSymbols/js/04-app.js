/** Que son los WeakMaps? */
/** Diferencias con los maps:
 * - Sirven muy bien para mantener ciertos datos como privados (pero no para datos sensibles)
 * - No se pueden iterar ni conocer su tamanio (.size())
 * - Solamente acepta objetos, no un String ni un numero
 */

const producto = {
    idProducto : 10
}

const weakmap = new WeakMap();
weakmap.set(producto, 'Monitor'); // El objeto es la llave y 'Monitor' el valor
console.log(weakmap.has(producto)); // Buscando si existe
console.log(weakmap.get(producto)); // Obteniendo el valor

    /**
     * * Para ninguno de los casos anteriores utilizando a 'producto', se nos muestra en consola el idProducto (atributo del objeto), esa informacion es privada. A menos que se imprima el wakmap completo.
     */

console.log(weakmap); // Desplegar hasta obtener idProducto