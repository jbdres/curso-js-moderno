// LocalStorage en JavaScript

/**
 * * Nota:
 * * - Es posible acceder a esta herramienda de dos formas: 'window.localStorage' o 'localStorage'
 * * - Solo se pueden guardar strings
 * * - Para JavaScript existe tanto 'LocalStorage' como 'SessionStorage'; la diferencia entre estas dos herramientas es la durabilidad de la informacion en el navegador. Mientras que 'SessionStorage' guarda la data solo hasta que el navegador se cierra; 'LocalStorage' lo hace por mas tiempo.
 * * - La forma en la que se accede a la informacion desde el navegador, depende de como este se organiza, en Chrome y Edge: Inspect > Aplication, Firefox: Inspect > Storage
 */

localStorage.setItem('nombre', 'jbdres'); // Parametros: Identificador y valor

/**
 * * Nota:
 * * - Aunque solamente es posible guardar strings, hay una forma de convertir otro tipo de datos a esto; con 'JSON.stringfy()'.
 */

// Objetos
const producto = {
    nombre : 'Monitor de 24 pulgadas',
    precio : 300,
    disponible : true
}

const productoString = JSON.stringify(producto);
console.log(typeof productoString);
localStorage.setItem('producto', productoString);

// Arrays
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril'];
localStorage.setItem('meses', JSON.stringify(meses));