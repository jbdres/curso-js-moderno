/** El muy exagerado callback hell */

const paises = [];

function nuevoPais(pais, callback) {
    paises.push(pais);
    console.log(`Agregado: ${pais}`);
    callback();
}

function mostrarPaises() {
    console.log(paises);
}

function iniciarCallbackHell() {
    setTimeout(() => {
        nuevoPais('Alemania', mostrarPaises); // Primer pais
        setTimeout(() => {
            nuevoPais('Francia', mostrarPaises); // Segundo pais
            setTimeout(() => {
                nuevoPais('Italia', mostrarPaises); // Tercer pais
            }, 3000);
        }, 3000);
    }, 3000);
}

/**
 * * Nota:
 * - Cada vez que se agregan mas elementos, se tiene esta curva hacia adentro en la funcion y tal vez esta no es la mejor manera de escribir codigo, ya que hay mejores formas de hacerlos, por eso es que se le conoce como callback hell.
 */

iniciarCallbackHell();