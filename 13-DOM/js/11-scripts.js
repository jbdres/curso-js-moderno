// Un ejemplo mas avanzado de lo que se puede hacer con JavaScript
// Explicacion: Si se oprime un boton en concreto el footer aparece y desaparece, cambiando a su vez el estilo con el que cuenta el boton
const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

// Registro del evento del boton
/** Una manera de dar accion:
 *  btnFlotante.addEventListener('click', mostrarOcultarFooter);
    function mostrarOcultarFooter() {
        console.log('Click en el boton');
    }
 */

// Forma de accion a usar
btnFlotante.addEventListener('click', () => {
    // Esta es una funcion anonima, se declaran sin nombre y con la misma sintaxis que un arrow function

    /**
     * * Notas: 
     * * - El estilo con el que cuenta el footer para aparecer y desparecer depende de la clase con la que este; esto se puede verificar en el archivo CSS
     * * - Lo anterior cuenta tambien para el boton flotante
     */


    // Verificar si la clase 'activo' esta en el footer y el boton
    if(footer.classList.contains('activo')) {
        footer.classList.remove('activo'); // Al no tener la clase, el CSS determina su comportamiento
        btnFlotante.classList.remove('activo');
        btnFlotante.textContent = 'Idioma y Moneda';
    } else {
        footer.classList.add('activo'); // Anadiendo la clase a los elementos
        btnFlotante.classList.add('activo');
        btnFlotante.textContent = 'X Cerrar';
    }

    console.log(footer.classList);

});
