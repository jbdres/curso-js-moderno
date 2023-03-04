/* String Methods - Replace, Slide y Substring * */
const producto = 'Monitor de 20 pulgadas';

console.log(producto);

// .replace (Remplazar)
/* pulgadas' por su notacion * */
console.log(producto.replace('pulgadas', '"'));
    /* Nota: Diferencia entre mayusculas y minusculas, No es lo mismo: console.log(producto.replace('Pulgadas', '"')); */

/* 'Monitor' por 'Monitor curvo'* */
console.log(producto.replace('Monitor', 'Monitor curvo'));


// slice (Cortar una cadena de texto)
    // Dos parametros: Posicion de inicio, posicion de cierre
console.log(producto.slice(0, 13)); // Desde 0 hasta 13 (posicion)
console.log(producto.slice(8)); // Desde la posicion 8 hasta el final

console.log(producto.slice(2, 1)); /* ¿Desde la posicion 2 hasta la 1?: Si el primer número es mayor que el segundo, sencillamente no se muestra nada. */


// Alternativa a slice (.substring)
console.log(producto.substring(0, 13)); // Misma salida
console.log(producto.substring(8)); // Misma salida

console.log(producto.substring(2,1)); // Salida 'o': Lo que hace este metodo es invertir en este caso los valores (2, 1) -> (1,2) para que por lo menos haya una salida coherente. (Esa es la principal diferencia)


// Ejemplo: Obtener la primera letra del usuario y convertirla a mayuscula
const user = "julian";
console.log(user.substring(0,1).toUpperCase());
console.log(user.charAt(0).toUpperCase());

    /* Nota: .charAt trae la letra que este en la posicion que le indiquemos * */
