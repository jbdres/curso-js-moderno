/** Intersection Observer */
/** 
 * * Nota:
 * - Intersection Observer es una API nativa de JavaScript que determina si un elemento del DOM es visible o no en pantalla
 */

document.addEventListener('DOMContentLoaded', () => {
    
    const observer = new IntersectionObserver(entries => {

        if (entries[0].isIntersecting) { // Metodo que determina si el elemento aparece o no aun en pantalla
            console.log('Ya es visible');
        } else {
            console.log('No es visible');
        }

    });

        // Aplicar seguimiento a un elemento
    // console.log(document.querySelector('.premium'));
    observer.observe(document.querySelector('.premium'));

});