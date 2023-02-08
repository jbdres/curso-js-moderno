/* Variables con 'const'
- Existen muy pocas diferencias entre 'const' y 'let'.
- Las reglas y funciones no cambian.
- El scope de la variable es el mismo (tanto para 'var' como para 'let'), Osea: Definicion de variables con el mismo nombre.
- Hay algunas otras diferencias entre 'const' y 'let' para arreglos y colecciones (se vera mas adelante).
* */

/* Diferencia principal: 'const' no puede ser reasignado.
- 'const':constante (Datos que no cambian).
- Tampoco no puede cambiar de dato.
*/

const pi = 3.1415; // El valor de pi nunca va a cambiar de valor.
// pi = 4.14; // -> Genera un error

/* Otra diferencia: Cuando inicalizamos la variable, esta ya tiene que tener un valor* 
    Ejemplo (No se puede hacer):
    const planetas;
    planetas = 9;
*/

// Si no conocemos el valor de una variable al momento de inicalizar, es mejor utilizar 'let', es mucho mas versatil.

const carta = "Este es un texto fijo";