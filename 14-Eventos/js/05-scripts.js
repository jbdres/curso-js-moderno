// Eventos sobre los inputs
const busqueda = document.querySelector('.busqueda'); // Elemento 'input' del HTML

/** Tipos de eventos que se pueden dar
 * * keydown: Se presiona una tecla
 * * keyup: Se presiona la tecla pero se suelta
 * * blur: (Para validacion del formulario) Cuando se entra al campo pero se sale (Clic afuera de este)
 * * copy: Se copia texto
 * * paste: Se pega texto
 * * cut: Se corta el texto
 * * input: Registra todos los eventos del input a excepcion del 'blur'
 */

busqueda.addEventListener('input', (e) => {
    
    /**
     * Notas:
     * e: Informacion del evento que se esta presentando
     * e.target: Elemento del HTML sobre el cual se esta trabajando
     * e.target.value: Valor actual del input (Tiene muchos usos)
     */

    console.log(e.target.value);
});