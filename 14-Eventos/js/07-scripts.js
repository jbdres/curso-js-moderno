// Prevenir Event Bubbling con Delegation
const cardDiv = document.querySelector('.card');

// Selector principal (encierra a todos los elementos que esten dentro del div de card)
cardDiv.addEventListener('click', (e) => {
    console.log(e.target.classList); // Determinar la clase que posee el elemento dado por el evento

    // Accion para titulo
    // Se agrega una funcion al elemento que coincida con el argumento dado
    if (e.target.classList.contains('titulo')) {
        console.log('Diste click en titulo');
    }

    /**
     * * Nota: A esto se le conoce como Delegation, se determina una accion para cada elemento del HTML sin importar que afecte al elemento sobre el cual se encuentre.
     */

    // Accion para precio
    if (e.target.classList.contains('precio')) {
        console.log('Diste click en precio');
    }

});