/* Variables con 'var'
Nota: Esta es una de las versiones anteriores para declarar una variable en js, es necesario tenerlo en cuenta porque la gran parte de codigo escrito con este lenguaje esta con 'var'.*/

// Tipado de variables en JavaScript: Dinamico (Variable con String puede tener un numero)

var producto = "Monitor de 24 pulgadas";
producto = "Monitor de 19 pulgadas"; // Reasignando el valor de la variable
console.log(producto);

// Cambiando el tipo de dato String -> Int
producto = 24;

// Inicializando una variable sin valor
var disponible;
disponible = true;
disponible = false;

// Inicializando varias variables (En una sola linea de codigo) con valor y sin valor
var uno, dos, tres;    
var cuatro = "", cinco = 3, seix = true;

// Nota Importante: Recordemos que existen algunas reglas de sintaxis para nombrar a las variables