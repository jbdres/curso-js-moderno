// Evento submit a un formulario
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    /**
     * * Nota:
     * * - El metodo 'preventDefault()', Detiene la accion que realizaria el elemento por default; gracias a ello, nosotros nos encargamos de la accion que realiza en todo momento.
     */

    console.log(e.target.action) // Redireccion del formulario
    console.log(e.target.method); // Metodo
});

// Usando la declaracion de funcion
formulario.addEventListener('submit', validarFormulario);
function validarFormulario(e) {
    e.preventDefault();
    console.log('Declaracion de funcion');
}


// Otro ejemplo de 'e.preventDefault()' a un enlace
/* const enlace = document.querySelector('a');
enlace.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Redireccion cancelada')
}); */