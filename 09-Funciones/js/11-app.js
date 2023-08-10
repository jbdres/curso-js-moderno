/** Ventajas de los Arrow Functions */

/** Declaración: const aprendiendo = () => 'Aprendiendo JavaScript';
 * Parametros y argumentos:
 * 1. Cuando solamente tenemos un parametro para la función se hace innecesario ponerlo entre paréntesis ().
 * 2. Si hay más de un parametro ya es obligatorio hacer uso de estos.
 */

const aprendiendo = tecnologia => `Aprendiendo ${tecnologia}`; // tecnología vendría siendo el parametro para la función.
console.log(aprendiendo('JavaScript'));

// Con dos parametros
const aprendiendo2 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`; // El no uso de los paréntesis genera un error.
console.log(aprendiendo2('JavaScript', 'Node.js'));

// Declaración normal de la función (Function Expression)
const aprendiendo3 = function(tecnologia, tecnologia2) {
    return `Aprendiendo ${tecnologia} y ${tecnologia2}`;
}
console.log(aprendiendo3('JavaScript', 'Node.js'));


    // Como se evidencia el uso de los Arrow Functions, ahorra ciertas lineas de codigo, lo cual hace que este se vea más limpio.
