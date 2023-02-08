/* Variables con 'let' 
Nota importante: No podemos tener 2 archivos distintos de js (que estan al mimos nivel (Scope de las variables)), en el que declaremos en ambos la misma variable ya que tendremos errores y confusion para tratarlas a cada una.
    
    Ejemplo: La variable 'producto' se declaro en '01-app.js', por lo cual si la imprimimos en este archivo nos mostrara el ultimo valor que esta haya obtenido (sin saber en que archivo se le dio dicho valor (Claro, tomando en cuenta que aqui tambien declaramamos la misma variable)).
    
    let producto = ""; // -> Mal
*/

/* Versiones resientes para declarar variables con js: 'let' y 'const'
Nota: Las reglas para declarar las variables con estas versiones siguen siendo las mismas que cuando lo hicimos con 'var'; pasa igual que con las funciones*/

let mercancia = "zapatos nike";
mercancia = "Chaqueta puma"; // Reasignando
mercancia = 18; // Cambiando el tipo de dato

let siete = "", ocho = 3, nueve = false, diez = null;